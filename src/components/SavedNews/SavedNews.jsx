import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import { CurrentUserContext } from "../../utils/contexts/CurrentUserContext";
import './SavedNews.css';

function SavedNews({ isLoggedIn, savedCards }) {
    const currentUser = useContext(CurrentUserContext);
    // fake keyword, create logic to fetch from saved cards here
    const keyword = 'Yellowstone, Rockwell, Nature';
    return (
      <div className="savedNews">
        <Header isLoggedIn={isLoggedIn} />
        <div className="savedNews__header">
          <p className="savedNews__title">Saved Articles</p>
          <h2 className="savedNews__description">{currentUser.user}, you have {savedCards.length} saved articles</h2>
          <p className="savedNews__keywords">By keywords: {keyword}</p>
        </div>
        {newsArticles.map((item) => {
                    return <NewsCard />
                })
        }
        <Footer />
      </div>  
    )
};

export default SavedNews;