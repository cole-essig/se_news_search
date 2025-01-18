import { useState, useEffect } from "react";
import Header from "../Header/Header";
import About from "../About/About";
import Footer from "../Footer/Footer";
import SearchResults from "../SearchResults/SearchResults";
import './Main.css';

function Main({ isLoggedIn, signOut, handleCardMark, news, fetchSearchResults }) {
    return (
        <div className="main">
          <Header isLoggedIn={isLoggedIn} signOut={signOut} fetchSearchResults={fetchSearchResults} />

          { news.length > 0 && <SearchResults news={news} isLoggedIn={isLoggedIn} handleCardMark={handleCardMark} /> }
          
          <About />
          <Footer />
        </div>
    )
};

export default Main;