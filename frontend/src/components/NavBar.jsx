import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(prev => (prev === menu ? null : menu));
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">Trip Vista</Link>

      <ul className="nav-links">
        {/* Holidays Dropdown */}
        <li className="nav-item">
          <button className="nav-link" onClick={() => toggleDropdown('holidays')}>
            Holidays
          </button>
          {openDropdown === 'holidays' && (
            <ul className="dropdown-menu">
              <li><Link to="/Holidays/Temple">Temple</Link></li>
              <li><Link to="/Holidays/Beaches">Beaches</Link></li>
              <li><Link to="/Holidays/Waterfalls">Waterfalls</Link></li>
              <li><Link to="/Holidays/HillStation">Hill Station</Link></li>
            </ul>
          )}
        </li>

        {/* Other Links */}
        <li><Link to="/Packages" className="nav-link">Packages</Link></li>
        <li><Link to="/Transport" className="nav-link">Transport</Link></li>

        {/* Hotels/Homestay Dropdown */}
        <li className="nav-item">
          <button className="nav-link" onClick={() => toggleDropdown('stay')}>
            Hotels/Homestay
          </button>
          {openDropdown === 'stay' && (
            <ul className="dropdown-menu">
              <li><Link to="/Homestay/Hotel">Hotel</Link></li>
              <li><Link to="/Homestay/Homestay">Homestay</Link></li>
            </ul>
          )}
        </li>

        {/* Events & Festivals Dropdown */}
        <li className="nav-item">
          <button className="nav-link" onClick={() => toggleDropdown('events')}>
            Events & Festivals
          </button>
          {openDropdown === 'events' && (
            <ul className="dropdown-menu">
              <li><Link to="/EventsFestivals/Event">Event</Link></li>
              <li><Link to="/EventsFestivals/Festival">Festival</Link></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
