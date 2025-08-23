import React, { useState, useRef } from 'react';
import { statesData } from './data';
import './Hotel.css';
import { FaTimes } from 'react-icons/fa';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import HotelBooking from './HotelBooking.jsx';

// BookingForm component is defined outside the main component
const BookingForm = ({ hotel, onClose, onPayNowClick }) => {
  return (
    <div className="booking-overlay">
      <div className="booking-form-container">
        <div className="booking-header">
          <h2>Your payment options</h2>
          <button onClick={onClose} className="close-btn"><FaTimes /></button>
        </div>
        <p className="fully-refundable">✓ Fully refundable before Sat, 23 Aug</p>
        <div className="payment-options">
          {/* Pay when you stay card */}
          <div className="payment-card pay-at-property">
            <h3>Pay when you stay</h3>
            <div className="option-content">
              <ul>
                <li>Pay the property directly in their preferred currency (INR)</li>
              </ul>
              <div className="price-details">
                <div className="hotels-rewards">
                  <span className="hotels-logo">H</span> Hotels.com® Rewards
                </div>
                <div className="price-info">
                  <span className="main-price">₹32,912</span>
                  <span className="total-price">₹1,94,181 total includes taxes & fees</span>
                </div>
              </div>
            </div>
            <button className="pay-btn pay-at-property-btn">Pay at property</button>
            <p className="disclaimer">You will not be charged until your stay</p>
          </div>
          {/* Pay now card */}
          <div className="payment-card pay-now-card">
            <h3>Pay now</h3>
            <div className="option-content">
              <ul>
                <li>You can use a valid Hotels.com coupon</li>
                <li>We will process your payment in your local currency</li>
                <li>More ways to pay: use debit/credit card</li>
              </ul>
              <div className="price-details">
                <div className="hotels-rewards">
                  <span className="hotels-logo">H</span> Hotels.com® Rewards
                </div>
                <div className="price-info">
                  <span className="main-price">₹32,912</span>
                  <span className="total-price">₹1,94,181 total includes taxes & fees</span>
                </div>
              </div>
            </div>
            {/* This button now triggers the navigation */}
            <button className="pay-btn pay-now-btn" onClick={onPayNowClick}>Pay now</button>
            <p className="disclaimer">You will not be charged yet</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Hotel component
const Hotel = () => {
  // State variables for managing the UI
  const [searchTerm, setSearchTerm] = useState('');
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [showFullBookingForm, setShowFullBookingForm] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const galleryRef = useRef(null);

  // Function to handle clicking "Book Now"
  const handleBookNowClick = (hotel) => {
    setSelectedHotel(hotel);
    setShowBookingForm(true);
    setShowFullBookingForm(false);
  };

  // Function to handle the transition to the full booking form
  const handlePayNowProceed = () => {
    setShowBookingForm(false);
    setShowFullBookingForm(true);
  };

  // Filter the hotels based on the search term
  const filteredStates = statesData.filter(state =>
    state.state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Functions for scrolling the image gallery
  const scrollLeft = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="main-content">
      <section className="listings-hero">
        <h1 className="listings-title">Famous Hotels in India</h1>
        {/* The CSS for this div makes the input and button appear on one line */}
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

      {/* Conditionally render the listings grid if there is a search term */}
      {searchTerm && (
        <section className="listings-grid">
          {filteredStates.map((stateInfo, index) => (
            <div key={index} className="state-section">
              <h2 className="state-heading">{stateInfo.state}</h2>
              <div className="item-container">
                {stateInfo.hotels.map((hotel, hotelIndex) => (
                  <div key={hotelIndex} className="listing-card">
                    <img src={hotel.image} alt={hotel.name} className="listing-image" />
                    <div className="listing-info">
                      <h3>{hotel.name}</h3>
                      <button className="book-btn" onClick={() => handleBookNowClick(hotel)}>Book Now</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          {filteredStates.length === 0 && (
            <p className="no-results">No hotels found for that state. Please try another search.</p>
          )}
        </section>
      )}

{/* New section for key features */}
      <section className="features-section">
        <h2 className="features-heading">Why Choose Us</h2>
        <div className="features-grid">
          <div className="feature-item">
            <span className="feature-icon">☀️</span>
            <h3 className="feature-title">Soft Climate</h3>
            <p className="feature-description">
              Enjoy a pleasant and comfortable climate, perfect for relaxation.
            </p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🍽️</span>
            <h3 className="feature-title">Wonderful Cuisine</h3>
            <p className="feature-description">
              Savor delicious, locally-inspired dishes prepared by our chefs.
            </p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">📍</span>
            <h3 className="feature-title">Convenient Location</h3>
            <p className="feature-description">
              Our properties are located in prime spots, close to popular attractions.
            </p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">📶</span>
            <h3 className="feature-title">Free Wi-Fi</h3>
            <p className="feature-description">
              Stay connected with complimentary high-speed internet access.
            </p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🎉</span>
            <h3 className="feature-title">Choice of Entertainment</h3>
            <p className="feature-description">
              From sports to evening shows, we offer a variety of activities for all.
            </p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🏞️</span>
            <h3 className="feature-title">Large Territory</h3>
            <p className="feature-description">
              Explore our spacious grounds with beautiful gardens and recreational areas.
            </p>
          </div>
        </div>
      </section>
      {/* Image Gallery Section */}
      <section className="image-gallery-container">
        <h2>Explore More Destinations</h2>
        <div className="image-gallery" ref={galleryRef}>
          <div className="gallery-item">
            <img src="https://via.placeholder.com/300x200/87CEEB/FFFFFF?Text=Cityscape" alt="Cityscape" />
          </div>
          <div className="gallery-item">
            <img src="https://via.placeholder.com/300x200/ADD8E6/FFFFFF?Text=Nature+View" alt="Nature View" />
          </div>
          <div className="gallery-item">
            <img src="https://via.placeholder.com/300x200/B0E0E6/FFFFFF?Text=Mountain+Landscape" alt="Mountain Landscape" />
          </div>
          <div className="gallery-item">
            <img src="https://via.placeholder.com/300x200/F0F8FF/000000?Text=Beach+Scene" alt="Beach Scene" />
          </div>
          <div className="gallery-item">
            <img src="https://via.placeholder.com/300x200/FAEBD7/000000?Text=Historical+Site" alt="Historical Site" />
          </div>
          {/* Add more gallery items as needed */}
        </div>
        <div className="gallery-navigation">
          <button className="nav-button prev-btn" onClick={scrollLeft}>
            <FaArrowLeft />
          </button>
          <button className="nav-button next-btn" onClick={scrollRight}>
            <FaArrowRight />
          </button>
        </div>
      </section>

      {/* Booking Form rendered conditionally */}
      {showBookingForm && selectedHotel && (
        <BookingForm
          hotel={selectedHotel}
          onClose={() => setShowBookingForm(false)}
          onPayNowClick={handlePayNowProceed}
        />
      )}

      {/* Full Hotel Booking Page */}
      {showFullBookingForm && <HotelBooking />}

      {/* Footer Section */}
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
              <li><button className="footer-link-btn">Home</button></li>
              <li><button className="footer-link-btn">Hotels</button></li>
              <li><button className="footer-link-btn">Homestays</button></li>
              <li><button className="footer-link-btn">Festivals</button></li>
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

export default Hotel;
