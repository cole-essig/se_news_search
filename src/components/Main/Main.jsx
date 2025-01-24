import About from "../About/About";
import LoadingSection from "../LoadingSection/LoadingSection";
import SearchResults from "../SearchResults/SearchResults";
import './Main.css';

function Main({ isLoggedIn, handleCardMark, news, isLoading }) {
    return (
        <main className="main">
          { isLoading ? <LoadingSection isLoading={isLoading} /> : '' }
          { news.length > 0 && <SearchResults news={news} isLoggedIn={isLoggedIn} handleCardMark={handleCardMark} /> }
          
          <About />
        </main>
    )
};

export default Main;