import React from 'react';
import './Packages.css';

const packages = [
  { title: "Beginner's guide", image: "/images/Packages/1.jpg" },
  { title: "Accessible travel", image: "/images/Packages/2.jpg" },
  { title: "Planning tips", image: "/images/Packages/3.jpg" },
  { title: "Trip Planner", image: "/images/Packages/4.jpg" },
  { title: "Australian budget guide", image: "/images/Packages/5.jpg" },
  { title: "Itinerary planner", image: "/images/Packages/6.jpg" },
  { title: "Find a travel agent", image: "/images/Packages/7.jpg" },
  { title: "Find accommodation", image: "/images/Packages/8.jpg" },
  { title: "Find tours", image: "/images/Packages/9.jpg" },
  { title: "Find transport", image: "/images/Packages/10.jpg" }
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
