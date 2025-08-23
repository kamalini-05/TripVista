import React, { useState } from 'react';
import './TouristNavbar.css';
import Tripvista from '../components/tv.png';

const TouristNavbar = ({ onSearch, username }) => {
  const [query, setQuery] = useState('');
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="tourist-navbar">
      {/* Logo */}
      <div className="logo">
        <img src={Tripvista} alt="Logo" />
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li className="nav-item">
          <button className="nav-button" onClick={() => toggleDropdown('transport')}>
            Transport
          </button>
          <ul className={`styled-dropdown ${openDropdown === 'transport' ? 'active' : ''}`}>
            <li><a href="/Flight">Flight</a></li>
            <li><a href="/Train">Train</a></li>
          </ul>
        </li>

        <li className="nav-item">
          <button className="nav-button" onClick={() => toggleDropdown('homestay')}>
            Hotels & Homestays
          </button>
          <ul className={`styled-dropdown ${openDropdown === 'homestay' ? 'active' : ''}`}>
            <li><a href="/Hotel">Hotel</a></li>
            <li><a href="/Homestay">Homestay</a></li>
          </ul>
        </li>

        <li className="nav-item">
          <button className="nav-button" onClick={() => toggleDropdown('events')}>
            Events & Festivals
          </button>
          <ul className={`styled-dropdown ${openDropdown === 'events' ? 'active' : ''}`}>
            <li><a href="/Event">Event</a></li>
            <li><a href="/Festival">Festival</a></li>
          </ul>
        </li>

        <li className="nav-item"><a href="/Holidays">Holidays</a></li>
        <li className="nav-item"><a href="/Packages">Packages</a></li>
        <li className="nav-item"><a href="/Offer">Offer</a></li>

        {!username ? (
          <li className="nav-item"><a href="/signup">Signup</a></li>
        ) : (
          <li className="nav-item welcome-text">Welcome, {username}</li>
        )}
      </ul>

      {/* Search Box */}
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search 🔍"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </nav>
  );
};

export default TouristNavbar;
