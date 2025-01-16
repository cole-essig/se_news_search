import './NavBar.css';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { CurrentUserContext } from "../../utils/contexts/CurrentUserContext";

function NavBar({ isLoggedIn, signOut, className, isHome }) {
    const currentUser = useContext(CurrentUserContext);
    const handleLogout = (e) => {
      e.preventDefault();
      signOut();
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
                    <Link to='/' className='nav__home-link'>
                      Home
                    </Link>
                    <button className='nav__button'>Sign In</button>
                  </div>
                  :
                  <div className='nav__dynamic-links'>
                    <Link to='/' className={`nav__home-link ${className}`}>
                      Home
                    </Link>
                    <Link to='/saved-news' className={`nav__saved-articles ${className}`}>
                      Saved Articles
                    </Link>
                    <button className={!isHome ? 'nav__user-button-saved' :`nav__user-button`}>
                      <div className='nav__user-div'>
                        <span className={`nav__user-text ${className}`}>{currentUser.user}</span> 
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