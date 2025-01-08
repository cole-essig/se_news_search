import { useState } from "react";
import Header from "../Header/Header";
import About from "../About/About";
import Footer from "../Footer/Footer";
import SearchResults from "../SearchResults/SearchResults";
import './Main.css';

function Main({ isLoggedIn }) {
  const [newsArticles, setNewsArticles] = useState([]);
    return (
        <div className="main">
          <Header isLoggedIn={isLoggedIn} />

          { newsArticles.length > 0 && <SearchResults newsArticles={newsArticles} /> }
          
          <About />
          <Footer />
        </div>
    )
};

export default Main;