import React, { useState } from 'react';
import getResults from './requests/getResults';
import './search.css';

const SearchForm = ({ setSearchResults }) => {
    const [searchValue, setSearchValue] = useState();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const results = await getResults(searchValue);
        // console.log(results);
        // setSearchResults(results);
    }
    return (
        <div>
            <form className="search-form" onSubmit={handleSubmit}>
                <input type="text" className="search-box"
                onChange={(e) => setSearchValue(e.target.value)} />
                <button 
                className="search-btn"
                type="submit"
                data-testid="search-btn">Search</button>
            </form>
        </div>
    )
}

export default SearchForm;