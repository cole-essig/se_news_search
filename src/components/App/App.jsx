import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import SavedNews from '../SavedNews/SavedNews';
import Main from '../Main/Main';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState("");

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleSignUpClick = () => {
    setActiveModal("register");
  };

  const handleLogInClick = () => {
    setActiveModal("login");
  }; 

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
                <SavedNews />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
