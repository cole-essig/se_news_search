import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar({ isLoggedIn }) {
    const user = "Craig";
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
                    <Link className='nav__saved-articles'>
                      Saved Articles
                    </Link>
                    <button className='nav__user-button'>
                      <div className='nav__user-div'>
                        <span className='nav__user-text'>{user}</span> 
                        <img src='src\assets\logout-icon.svg' className='nav__user-button_img' />
                      </div>
                    </button>
                  </div>
                }
              </div>
    )
};

export default NavBar;