import "./SearchForm.css";
import { useState } from "react";

function SearchForm() {
const [search, setSearch] = useState('');
const handleSearchBarChange = (e) => {
    setSearch(e.target.value);
}

    return(
        <>
        <div className="searchBar">
                <input 
                    type='email'
                    className='searchBar__input'
                    id='searchBar'
                    placeholder='Enter Topic'
                    value={search}
                    onChange={handleSearchBarChange}
                />
            <button type="submit" className="searchBar__button">Search</button>
        </div>
        </>
    )
};

export default SearchForm;