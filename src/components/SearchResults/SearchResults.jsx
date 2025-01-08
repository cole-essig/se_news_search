import NewsCard from '../NewsCard/NewsCard';
import './SearchResults.css';

function SearchResults({ newsArticles }) {
    return(
        <div className="search">
           <h2 className="search__header">SEARCH RESULTS</h2> 
           <ul className="search__results-list">
             {newsArticles.map((item) => {
                return <NewsCard />
             })}
           </ul>
        </div>
    )
}

export default SearchResults;