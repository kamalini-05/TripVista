import React from 'react';
import './Packages.css';

const packages = [
  { title: "Beginner's guide", image: "https://source.unsplash.com/400x300/?nature,path" },
  { title: "Accessible travel", image: "https://source.unsplash.com/400x300/?forest,walk" },
  { title: "Planning tips", image: "https://source.unsplash.com/400x300/?city,travel" },
  { title: "Trip Planner", image: "https://source.unsplash.com/400x300/?mountain,explore" },
  { title: "Australian budget guide", image: "https://source.unsplash.com/400x300/?budget,travel" },
  { title: "Itinerary planner", image: "https://source.unsplash.com/400x300/?palm,road" },
  { title: "Find a travel agent", image: "https://source.unsplash.com/400x300/?kangaroo,travel" },
  { title: "Find accommodation", image: "https://source.unsplash.com/400x300/?hotel,pool" },
  { title: "Find tours", image: "https://source.unsplash.com/400x300/?desert,roadtrip" },
  { title: "Find transport", image: "https://source.unsplash.com/400x300/?forest,path" }
];

function Packages() {
  return (
    <div className="packages-container">
      <h2>Travel Packages</h2>
      <div className="packages-grid">
        {packages.map((pkg, index) => (
          <div key={index} className="package-card">
            <img src={pkg.image} alt={pkg.title} />
            <div className="package-title">{pkg.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Packages;
