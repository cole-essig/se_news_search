import { useState, useEffect } from "react";
import Header from "../Header/Header";
import About from "../About/About";
import Footer from "../Footer/Footer";
import LoadingSection from "../LoadingSection/LoadingSection";
import SearchResults from "../SearchResults/SearchResults";
import './Main.css';

function Main({ isLoggedIn, signOut, handleCardMark, news, fetchSearchResults, handleSignInClick, isLoading }) {
    return (
        <div className="main">
          <Header 
            isLoggedIn={isLoggedIn} 
            signOut={signOut} 
            fetchSearchResults={fetchSearchResults} 
            handleSignInClick={handleSignInClick} 
          />

          { isLoading ? <LoadingSection isLoading={isLoading} /> : '' }
          { news.length > 0 && <SearchResults news={news} isLoggedIn={isLoggedIn} handleCardMark={handleCardMark} /> }
          
          <About />
          <Footer />
        </div>
    )
};

export default Main;