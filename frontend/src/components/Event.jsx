import React from 'react';
import './Event.css';

const galleryImages = [
  "https://source.unsplash.com/featured/?temple",
  "https://source.unsplash.com/featured/?festival",
  "https://source.unsplash.com/featured/?dance",
  "https://source.unsplash.com/featured/?food",
  "https://source.unsplash.com/featured/?portrait",
  "https://source.unsplash.com/featured/?culture",
  "https://source.unsplash.com/featured/?hands",
  "https://source.unsplash.com/featured/?dog",
  "https://source.unsplash.com/featured/?coffee",
  "https://source.unsplash.com/featured/?flower",
  "https://source.unsplash.com/featured/?hair",
  "https://source.unsplash.com/featured/?car"
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
