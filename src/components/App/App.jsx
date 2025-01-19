import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import SavedNews from '../SavedNews/SavedNews';
import Main from '../Main/Main';
import LoginModal from '../LoginModal/LoginModal';
import RegisterModal from '../RegisterModal/RegisterModal'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../utils/contexts/CurrentUserContext';
import { getNewsbyKeyword } from '../../utils/api';
import './App.css';

function App() {
  // ------------------------------------
  // Constants
  // ------------------------------------
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [savedCards, setSavedCards] = useState([]);
  const [news, setNews] = useState([]);
  const [currentUser, setCurrentUser] = useState({
    user: "",
    email: ""
  });
 
  // ------------------------------------
  // Modal Functions
  // ------------------------------------
  const closeActiveModal = () => {
    setActiveModal("");
  };

  const switchRegisterModal = () => {
    closeActiveModal();
    setActiveModal("login");
  };

  const switchLoginModal = () => {
    closeActiveModal();
    setActiveModal("register");
  };


  // ------------------------------------
  // User Functions
  // ------------------------------------
  const onRegister = ({ password, user, email }) => {
    localStorage.setItem('user', JSON.stringify({ password: password, user: user, email: email }));
    setCurrentUser({ user: user, email: email });
    setIsLoggedIn(true);
    closeActiveModal();
  }

  const onLogIn = ({ email, password })  => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (email === user.email && password === user.password) {
      setCurrentUser({ user: user.user, email: user.email });
      setIsLoggedIn(true);
    } else {
    console.log("ERROR: Wrong email or password");
    // throw new Error('ERROR: Wrong email or password')
    }
    return 
  }

  const signOut = () => {
    localStorage.removeItem('user');
    setCurrentUser({ password: '', user: "", email: ''});
    setIsLoggedIn(false);
  } 
// ------------------------------------
  // API calls
  // ----------------------------------
  const fetchSearchResults = (keyword) => {
    setIsLoading(true);
    getNewsbyKeyword(keyword)
    .then((res) => {
      const results = handleSearchInfo(res.articles);
      const newCards = results.map(item => ({
        img: item.urlToImage,
        date: item.publishedAt,
        title: item.title,
        body: item.content,
        site: item.source.name,
        url: item.url,
        _id: Math.random(),
      }));
      setNews(prevNews => [...newCards, ...prevNews]);
      setIsLoading(false);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  // ------------------------------------
  // Handler Functions
  // ------------------------------------
  const handleCardMark = (card) => {
    setSavedCards((savedCards) => [card, ...savedCards]);
  }

  const handleCardDelete = (cardId) => {
    setSavedCards(savedCards.filter((item) => item._id !== cardId));
  }

  const handleSearchInfo = (arr) => {
   const nonNullArticles = arr.filter(item => item.author !== null);
   const result = nonNullArticles

   return result;
  }

  const handleSignInClick = () => {
    setActiveModal('login')
  }

  // ------------------------------------
  // UseEffects
  // ------------------------------------
  useEffect(() => {

    if (!activeModal) return; 

    const handleEscClose = (e) => { 
      if (e.key === "Escape") {
        closeActiveModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => { 
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      setActiveModal("login");
      return;
    };
    setCurrentUser({ user: user.user, email: user.email });
    setIsLoggedIn(true);   
  }, []);

  return (
    <div className='page'>
      <CurrentUserContext.Provider value={currentUser}>
      <div className='page__content'>
        <Routes>
          <Route
            path='/'
            element={
              <Main 
                isLoggedIn={isLoggedIn} 
                signOut={signOut} 
                handleCardMark={handleCardMark} 
                news={news} 
                fetchSearchResults={fetchSearchResults}
                handleSignInClick={handleSignInClick}
                isLoading={isLoading}
              />
            }
          />
          <Route
            path='/saved-news'
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn} anonymous>
                <SavedNews 
                  isLoggedIn={isLoggedIn} 
                  savedCards={savedCards} 
                  signOut={signOut} 
                  handleCardDelete={handleCardDelete} 
                />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      {activeModal === "login" && (
            <LoginModal
              handleModalClose={closeActiveModal}
              isOpen={activeModal === "login"}
              onLogIn={onLogIn}
              switchActiveModal={switchLoginModal}
            />
          )}
          {activeModal === "register" && (
            <RegisterModal
              handleModalClose={closeActiveModal}
              isOpen={activeModal === "register"}
              onRegister={onRegister}
              switchActiveModal={switchRegisterModal}
            />
          )}
      </CurrentUserContext.Provider>
    </div>
  )
}

export default App
