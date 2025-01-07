import './Header.css';
import NavBar from '../NavBar/NavBar';

function Header({ isLoggedIn }) {
    return (
      <div className='header'>
        <NavBar isLoggedIn={isLoggedIn} />
      </div>
    )
};

export default Header;