import './Header.css';
import NavBar from '../NavBar/NavBar';
import SearchForm from '../SearchForm/SearchForm';
function Header({ isLoggedIn, signOut, fetchSearchResults }) {
    return (
      <div className='header'>
        <NavBar isLoggedIn={isLoggedIn} signOut={signOut} className={''} isHome={true} />
          <div className="header__text">
            <h1 className='header__title'>Whats going on in the world?</h1>
            <p className='header__subtitle'>Find the latest news on any topic and save them in your personal account</p>
          </div>
          <SearchForm fetchSearchResults={fetchSearchResults} />
      </div>
    )
};

export default Header;