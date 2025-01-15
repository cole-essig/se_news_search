import NewsCard from '../NewsCard/NewsCard';
import './SearchResults.css';

function SearchResults({ news, isLoggedIn, handleCardMark }) {
    return(
        <div className="search">
           <h2 className="search__header">SEARCH RESULTS</h2> 
          <div className="search__results-list">
            <ul className="search__results">
              {news.map((item, index) => {
                  return <NewsCard key={index} card={item} isLoggedIn={isLoggedIn} handleCardMark={handleCardMark} />
              })}
            </ul>
          </div>
          <button className='search__more-button'>Show More</button>
        </div>
    )
}

export default SearchResults;