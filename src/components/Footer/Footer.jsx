import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return(
        <div className="footer">
            <p className="footer__copyright">© 2025 Cole Essig, Powered by News API</p>
            <div className="footer__links">
              <Link to='/'>Home</Link>
              <Link to='https://tripleten.com/'>TripleTen</Link>
              <Link to='https://github.com/cole-essig'>
                <img />
              </Link>
              <Link to='https://facebook.com'>
                <img />
              </Link>
            </div>
        </div>
    )
};

export default Footer;