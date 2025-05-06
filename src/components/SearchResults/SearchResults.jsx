import { useState, useEffect } from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './SearchResults.css';

function SearchResults({ news, isLoggedIn, handleCardMark }) {
  const [index, setIndex] = useState(0); 
  const [displayNews, setDisplayNews] = useState(news.slice(0, 3)); 

  const handleShowMore = (e) => {
      e.preventDefault();
      setIndex((index) => {
        const newIndex = index + 3;
        setDisplayNews((prevDisplayNews) => [...prevDisplayNews,...news.slice(newIndex, newIndex + 3),
        ]);
      return newIndex;   
      });
  };
  useEffect(() => {
    setDisplayNews(news.slice(0, 3)); 
    setIndex(0);
  }, [news]); 
    return(
        <div className="search">
           <h2 className="search__header">SEARCH RESULTS</h2> 
          <div className="search__results-list">
            <ul className="search__results">
              {displayNews.map((item, index) => {
                  return <NewsCard key={index} card={item} isLoggedIn={isLoggedIn} handleCardMark={handleCardMark} />
              })}
            </ul>
          </div>
          <button type='button' className='search__more-button' onClick={handleShowMore} >Show More</button>
        </div>
    )
}

export default SearchResults;