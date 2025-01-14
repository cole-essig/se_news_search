import { useState, useEffect } from "react";
import Header from "../Header/Header";
import About from "../About/About";
import Footer from "../Footer/Footer";
import SearchResults from "../SearchResults/SearchResults";
import './Main.css';

function Main({ isLoggedIn }) {
  const newStuff = {
    img: 'src/assets/Me.cole.jpeg',
    date: 'November, 4 2020',
    title: 'Nature makes you better',
    body: 'BLah vfhghjhbv khchj mvkj fkhvjgjkg jkh gkj fjh jhkvhhk khvjhvvhgcbvcnb b,jhgj,hmb,jh jhvbmbvkghcmnb,vhg jk',
    site: 'TreeHugger',
  }
  const [newsArticles, setNewsArticles] = useState([newStuff]);
  useEffect(() => {
    setNewsArticles([newStuff, ...newsArticles]);
  }, []);
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