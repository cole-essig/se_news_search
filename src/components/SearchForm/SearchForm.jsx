import "./SearchForm.css";

function SearchForm() {
const [search, setSearch] = useState('');
const handleSearchBarChange = (e) => {
    setSearch(e.target.value);
}

    return(
        <div className="searchBar">
          <label htmlFor='search bar' className='searchBar__label'>
                Search Bar{" "}
                <input 
                    type='email'
                    className='SearchBar__input'
                    id='searchBar'
                    placeholder='Enter Topic'
                    value={search}
                    onChange={handleSearchBarChange}
                />
            </label>
        </div>
    )
};

export default SearchForm;