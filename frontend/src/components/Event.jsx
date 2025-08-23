import React from 'react';
import './Event.css';

const galleryImages = [
  "/images/Packages/1.jpg",
  "/images/Packages/2.jpg",
  "/images/Packages/3.jpg",
  "/images/Packages/4.jpg",
  "/images/Packages/5.jpg",
  "/images/Packages/6.jpg",
  "/images/Packages/7.jpg",
  "/images/Packages/8.jpg",
  "/images/Packages/9.jpg",
  "/images/Packages/10.jpg",
];

function Event() {
  return (
    <div className="event-gallery-container">
      <h2>Welcome to the Festival Photo Gallery</h2>
      <div className="event-gallery-grid">
        {galleryImages.map((url, index) => (
          <div key={index} className="event-gallery-item">
            <img src={url} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Event;
