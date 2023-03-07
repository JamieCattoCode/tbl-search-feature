import React, { useState } from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import './search.css';

const SearchPage = () => {
    const [searchResults, setSearchResults] = useState([]);
    return (
        <div className='search-page'>
            <h1>Search</h1>
            <SearchForm setSearchResults={setSearchResults}/>
            <SearchResults results={searchResults} />
        </div>
    )
}

export default SearchPage;