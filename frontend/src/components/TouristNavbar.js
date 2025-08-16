import React, { useState } from 'react';
import './TouristNavbar.css';
import Tripvista from '../components/tv.png';

const TouristNavbar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <nav className="tourist-navbar">
      <div className="logo">
        <img  src={Tripvista} alt="Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="/">Destinations</a></li>
        <li><a href="/Holidays">Holidays</a></li>
        <li><a href="/Packages">Packages</a></li>
        <li><a href="/Transport">Transport</a></li>
        <li><a href="/Homestay">Hotels&Homestays</a></li>
        <li><a href="/EventsFestival">Events&Festivals</a></li>
        <li><a href="/Offer">Offer</a></li>
        <li><a href="/More">More</a></li>
        <li><a href="/login">Sign In</a></li>
      </ul>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search 🔍"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {/*<button type="submit">🔍</button>*/}
      </form>
      
    </nav>
  );
};

export default TouristNavbar;