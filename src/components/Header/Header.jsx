import './Header.css';
import NavBar from '../NavBar/NavBar';

function Header({ isLoggedIn }) {
    return (
      <div className='header'>
        <NavBar isLoggedIn={isLoggedIn} />
          <div className="header__titlle">
            <h1>Whats going on in the world?</h1>
            <p className='header__subtitle'>Find the latest news on any topic and save them in your personal account</p>
          </div>
      </div>
    )
};

export default Header;