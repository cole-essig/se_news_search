import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar({ isLoggedIn }) {
    const user = "Craig";
    return(
        <div className='nav'>
                <Link to='/'>
                  <img></img>
                </Link>
                {!isLoggedIn ?
                  <div>
                    <Link to='/'>
                      <p>Home</p>
                    </Link>
                    <button>Sign In</button>
                  </div>
                  :
                  <div>
                    <Link to='/'>
                      <p>Home</p>
                    </Link>
                    <Link>
                      <p>Saved Articles</p>
                    </Link>
                    <button>{user} <img /></button>
                  </div>
                }
              </div>
    )
};

export default NavBar;