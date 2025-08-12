import React, { useState } from 'react';
import './TouristNavbar.css';

const TouristNavbar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <nav className="tourist-navbar">
      <div className="logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Tourism_logo.png" alt="Logo" />
        <span>ExploreX</span>
      </div>
      <ul className="nav-links">
        <li><a href="/">Destinations</a></li>
        <li><a href="/tours">Tours</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search places..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">🔍</button>
      </form>
    </nav>
  );
};

export default TouristNavbar;