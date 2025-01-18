import "./SearchForm.css";
import { useState } from "react";

function SearchForm({ fetchSearchResults }) {
const [search, setSearch] = useState('');
const handleSearchBarChange = (e) => {
    setSearch(e.target.value);
}

const handleSubmit = (e) => {
    e.preventDefault();
    fetchSearchResults(search);
}

    return(
        <>
        <form className="searchBar" onSubmit={handleSubmit} >
                <input 
                    type='text'
                    className='searchBar__input'
                    id='searchBar'
                    placeholder='Enter Topic'
                    value={search}
                    onChange={handleSearchBarChange}
                />
            <button type="submit" className="searchBar__button" >Search</button>
        </form>
        </>
    )
};

export default SearchForm;