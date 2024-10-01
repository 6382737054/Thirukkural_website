// src/components/SearchBar.jsx
import React from 'react';
import { useSearch } from '../context/SearchContext';

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useSearch();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex justify-center mt-4">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="border border-gray-300 p-2 rounded" // Add your styling here
      />
    </div>
  );
};

export default SearchBar;
