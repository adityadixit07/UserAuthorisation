import React, { useState } from 'react';

import "./Search.css"
const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <input
        className="search-input"
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;
