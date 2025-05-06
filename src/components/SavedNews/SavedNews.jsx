import { useState } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import NewsCardSaved from "../NewsCardSaved/NewsCardSaved";
import { useContext } from "react";
import { CurrentUserContext } from "../../utils/contexts/CurrentUserContext";
import './SavedNews.css';

function SavedNews({ isLoggedIn, savedCards, signOut, handleCardDelete }) {
    const currentUser = useContext(CurrentUserContext);
    let keyword;
    const createKeywords = (savedCards) => {
      if (savedCards.length === 0) {
        return keyword = ""
      } else if (savedCards.length === 1) {
        return keyword = ` ${savedCards[0].keyword}`;
      } else {
         return keyword =` ${savedCards[0].keyword}, ${savedCards[1].keyword}, ...`;
      }
    }
    createKeywords(savedCards);
    return (
      <div className="savedNews">
        <NavBar isLoggedIn={isLoggedIn} signOut={signOut} className={'saved-news-nav'} isHome={false} />
        <div className="savedNews__header">
          <p className="savedNews__title">Saved Articles</p>
          <h2 className="savedNews__description">{currentUser.user}, you have {savedCards.length || 0} saved articles</h2>
          <p className="savedNews__keywords">By keywords: {keyword}</p>
        </div>
        <div className="savedNews__display">
          <div className="savedNews__cards">
            {savedCards.length > 0 && savedCards.map((item, index) => {
                        return <NewsCardSaved key={index} card={item} handleCardDelete={handleCardDelete} />
                    })
            }
          </div>
        </div>
        <Footer />
      </div>  
    )
};

export default SavedNews;