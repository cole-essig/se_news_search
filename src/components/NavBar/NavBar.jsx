import './NavBar.css';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { CurrentUserContext } from "../../utils/contexts/CurrentUserContext";

function NavBar({ isLoggedIn, signOut }) {
    const currentUser = useContext(CurrentUserContext);
    const handleLogout = (e) => {
      e.preventDefault();
      signOut();
    }
    return(
        <div className='nav'>
                <div className='nav__static-link'>
                  <Link to='/' className='nav__logo-home'>
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
                    <Link to='/' className='nav__home-link'>
                      Home
                    </Link>
                    <Link to='/saved-news' className='nav__saved-articles'>
                      Saved Articles
                    </Link>
                    <button className='nav__user-button'>
                      <div className='nav__user-div'>
                        <span className='nav__user-text'>{currentUser}</span> 
                        <img src='src\assets\logout-icon.svg' className='nav__user-button_img' />
                      </div>
                    </button>
                  </div>
                }
              </div>
    )
};

export default NavBar;