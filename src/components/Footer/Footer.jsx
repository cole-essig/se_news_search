import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return(
        <footer className="footer">
            <p className="footer__copyright">© 2025 Cole Essig, Powered by News API</p>
            <div className="footer__links">
              <Link to='/' className='footer__links_home'>
                Home
              </Link>
              <Link to='https://tripleten.com/' className='footer__links_triple'>
                TripleTen
              </Link>
              <Link to='https://github.com/cole-essig' className='footer__links_github'>
                <img 
                  src='src\assets\githubsvg.png' 
                  className='footer__links_github-img' 
                  alt='Image of github logo acting as a link' 
                />
              </Link>
              <Link to='https://facebook.com' className='footer__links_facebook'>
                <img 
                  src='src\assets\fb.svg' 
                  className='footer__links_facebook-img' 
                  alt='Image of Facebook logo acting as a link' 
                />
              </Link>
            </div>
        </footer>
    )
};

export default Footer;