import React from "react";
import './search.css';

const SearchResults = ({ results }) => {
    if (!results.length) {
        return <p className="no-results">No results.</p>
    }
    return (
        <div className="search-results">
            {results.map((location, index) => {
                return (
                    <div className="search-result-item">
                        <p>{location.place}</p>
                        <p>{location.city}</p>
                        <p>{location.type}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default SearchResults;