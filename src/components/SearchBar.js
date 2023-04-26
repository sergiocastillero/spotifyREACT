import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as SearchIcon } from '../assets/svg/search.svg';
import BackIcon from '../assets/svg/back.svg';
import '../styles/Lists.css';
import { TokenContext } from './Context';
import allSearchs from '../services/getAllSearch';


const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const [token, setToken] = useContext(TokenContext);

  const handleKeyPress = async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const results = await allSearchs(query, token);
      onSubmit(results);
    }
  };

  return (
    <div className="searchBar">
      <form>
        <Link to="/">
          <img className="back-button" src={BackIcon} alt="back" />
        </Link>

        <div className="searchBarInput">
          <div className="search-icon">
            <SearchIcon />
          </div>
          <input
            type="text"
            placeholder="¿Qué te apetece escuchar?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
