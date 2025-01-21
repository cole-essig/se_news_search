import './NavBar.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { CurrentUserContext } from "../../utils/contexts/CurrentUserContext";

function NavBar({ isLoggedIn, signOut, className, isHome, signInClick }) {
    const currentUser = useContext(CurrentUserContext);
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
    
    const handleLogout = (e) => {
      e.preventDefault();
      signOut();
    }

    const handleSignIn = () => {
    signInClick();
    }

    const handleMobileClick = () => {
      setIsHovered(!isHovered)
    }

    return(
        <div className='nav'>
                <div className='nav__static-link'>
                  <Link to='/' className={`nav__logo-home ${className}`}>
                    NewsExplorer
                  </Link>
                </div>
                {!isLoggedIn ?
                  <div className='nav__dynamic-links'>
                    <Link 
                      to='/' 
                      className={`nav__home-link`}
                    >
                      Home
                    </Link>
                    <button 
                      type='button' 
                      className={`nav__button`} 
                      onClick={handleSignIn} 
                    >Sign In</button>
                  </div>
                  :
                  <div className='nav__dynamic-links'>
                    <Link 
                      to='/' 
                      className={`nav__home-link ${className} ${isHovered ? 'nav__dynamic-links_on nav__home-on' : ''}`}
                    >
                      Home
                    </Link>
                    <Link 
                      to='/saved-news' 
                      className={`nav__saved-articles ${className} ${isHovered ? 'nav__dynamic-links_on' : ''}`}
                    >
                      Saved Articles
                    </Link>
                    <button 
                      className={!isHome ? 'nav__user-button-saved' :`nav__user-button`}
                    >
                      <div className='nav__user-div'>
                        <span className={`nav__user-text ${className}`} onClick={handleMobileClick} >{currentUser.user}</span> 
                        <img 
                          src={!isHome ? 'src/assets/logout-dark.svg' : 'src/assets/logout-icon.svg'} 
                          className='nav__user-button_img' 
                          onClick={handleLogout}
                        />
                      </div>
                    </button>
                  </div>
                }
              </div>
    )
};

export default NavBar;