import React, { useState } from 'react';
import { statesData } from './data';
import './homestay.css';

const Homestay = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStates = statesData.filter(state =>
    state.state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="main-content">
      <section className="listings-hero">
        <h1 className="listings-title">Famous Homestays in India</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by state..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>Search</button>
        </div>
      </section>

      <section className="listings-grid">
        {filteredStates.map((stateInfo, index) => (
          <div key={index} className="state-section">
            <h2 className="state-heading">{stateInfo.state}</h2>
            <div className="item-container">
              {stateInfo.homestays.map((homestay, homestayIndex) => (
                <div key={homestayIndex} className="listing-card">
                  <img src={homestay.image} alt={homestay.name} className="listing-image" />
                  <div className="listing-info">
                    <h3>{homestay.name}</h3>
                    <button className="book-btn">Book Now</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        {filteredStates.length === 0 && (
          <p className="no-results">No homestays found for that state. Please try another search.</p>
        )}
      </section>

      {/* Footer code is now directly in this component */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h3>About Us</h3>
            <p>
              TripVista is your premier guide to India's most stunning destinations,
              famous hotels, and authentic homestays. We help you book unforgettable
              journeys and experiences.
            </p>
          </div>
          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Hotels</a></li>
              <li><a href="#">Homestays</a></li>
              <li><a href="#">Festivals</a></li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h3>Contact Us</h3>
            <p>Email: contact@tripvista.com</p>
            <p>Phone: +91 98765 43210</p>
            <div className="social-icons">
              {/* Add your social media icons here */}
            </div>
          </div>
          <div className="footer-section newsletter">
            <h3>Newsletter</h3>
            <p>Stay updated with our latest offers and travel tips.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 TripVista. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Homestay;