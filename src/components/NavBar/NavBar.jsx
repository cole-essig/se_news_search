import './NavBar.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { CurrentUserContext } from "../../utils/contexts/CurrentUserContext";

function NavBar({ isLoggedIn, signOut, isHome, signInClick }) {
    const currentUser = useContext(CurrentUserContext);
    const [screenSize, setScreenSize] = useState(window.innerWidth < 600);
    const [dropDown, setDropDown] = useState(false);
    
    const handleLogout = (e) => {
      e.preventDefault();
      signOut();
    };

    const handleSignIn = () => {
      signInClick();
    };

    const handleDropDownClick = () => {
      setDropDown(!dropDown);
    }

    useEffect(() => {
      const handleResize = () => {
        setScreenSize(window.innerWidth < 600);
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    return(
        <nav className={`nav ${screenSize && dropDown ? 'dropdown_black' : ''}`}>
            <div className='nav__static-link'>
              <Link to='/' className={`nav__logo-home`}>
                NewsExplorer
              </Link>
            </div>
            {screenSize ? (
              // Mobile version
              <>
                <button className='nav__dropdown_mobile-button' onClick={handleDropDownClick}></button>
                {!isLoggedIn ? (dropDown &&
                    <div className="nav__dropdown">
                    <Link to='/' className={`nav__home-link_mobile`}>
                      Home
                    </Link>
                    <button 
                      type='button' 
                      className={`nav__button_mobile`} 
                      onClick={handleSignIn} 
                    >Sign In</button>
                    </div>
                ) : (dropDown &&
                  <div className="nav__dropdown">
                     <Link to='/' className={`nav__home-link_mobile`}>
                      Home
                    </Link>
                    <Link 
                      to='/saved-news' 
                      className='nav__saved-articles_mobile'
                    >
                      Saved Articles
                    </Link>
                    <button 
                      className={!isHome ? 'nav__user-button-saved_mobile' : `nav__user-button_mobile`}
                    >
                      <div className='nav__user-div_mobile'>
                        <span className={`nav__user-text`}>
                          {currentUser.user}
                        </span>
                        <img 
                          src='src/assets/logout-icon.svg' 
                          className='nav__user-button_img' 
                          onClick={handleLogout} 
                        />
                      </div>
                    </button>
                  </div>
                )}
              </>
            ) : (
              // Desktop version
              <div className='nav__dynamic-links'>
                {!isLoggedIn ? (
                  <>
                    <Link to='/' className={`nav__home-link`}>
                      Home
                    </Link>
                    <button 
                      type='button' 
                      className={`nav__button`} 
                      onClick={handleSignIn} 
                    >
                      Sign In
                    </button>
                  </>
                ) : (
                  <>
                    <Link 
                      to='/' 
                      className={`nav__home-link`}
                    >
                      Home
                    </Link>
                    <Link 
                      to='/saved-news' 
                      className={`nav__saved-articles`}
                    >
                      Saved Articles
                    </Link>
                    <button 
                      className={!isHome ? 'nav__user-button-saved' : `nav__user-button`}
                    >
                      <div className='nav__user-div'>
                        <span 
                          className={`nav__user-text`} 
                        >
                          {currentUser.user}
                        </span> 
                        <img 
                          src={!isHome ? 'src/assets/logout-dark.svg' : 'src/assets/logout-icon.svg'} 
                          className='nav__user-button_img' 
                          onClick={handleLogout}
                        />
                      </div>
                    </button>
                  </>
                )}
              </div>
            )}
        </nav>
    );
}

export default NavBar;
