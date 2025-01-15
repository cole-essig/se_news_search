import { useState } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import NewsCardSaved from "../NewsCardSaved/NewsCardSaved";
import { useContext } from "react";
import { CurrentUserContext } from "../../utils/contexts/CurrentUserContext";
import './SavedNews.css';

function SavedNews({ isLoggedIn, savedCards, signOut }) {
    const currentUser = useContext(CurrentUserContext);
    // fake keyword, create logic to fetch from saved cards here
    const keyword = 'Yellowstone, Rockwell, Nature';
    return (
      <div className="savedNews">
        <NavBar isLoggedIn={isLoggedIn} signOut={signOut} />
        <div className="savedNews__header">
          <p className="savedNews__title">Saved Articles</p>
          <h2 className="savedNews__description">{currentUser.user}, you have {savedCards.length} saved articles</h2>
          <p className="savedNews__keywords">By keywords: {keyword}</p>
        </div>
        <div className="savedNews__cards">
          {savedCards.map((item, index) => {
                      return <NewsCardSaved key={index} card={item} />
                  })
          }
        </div>
        <Footer />
      </div>  
    )
};

export default SavedNews;