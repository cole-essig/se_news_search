import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import SavedNews from '../SavedNews/SavedNews';
import Main from '../Main/Main';
import LoginModal from '../LoginModal/LoginModal';
import RegisterModal from '../RegisterModal/RegisterModal'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../utils/contexts/CurrentUserContext';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [savedCards, setSavedCards] = useState('');
  const [currentUser, setCurrentUser] = useState({
    _id: "",
    user: "",
    email: ""
  });

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleSignUpClick = () => {
    setActiveModal("register");
  };

  const handleLogInClick = () => {
    setActiveModal("login");
  }; 

  const switchRegisterModal = () => {
    closeActiveModal();
    setActiveModal("login");
  };

  const switchLoginModal = () => {
    closeActiveModal();
    setActiveModal("register");
  };

  const onRegister = () => {
    console.log('Hey');
  }

  const onLogIn = ()  => {
    console.log("hey hey");
  }

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
  return (
    <div className='page'>
      <CurrentUserContext.Provider value={currentUser}>
      <div className='page__content'>
        <Routes>
          <Route
            path='/'
            element={
              <Main isLoggedIn={isLoggedIn} />
            }
          />
          <Route
            path='/saved-news'
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn} anonymous>
                <SavedNews isLoggedIn={isLoggedIn} savedCards={savedCards} />
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
