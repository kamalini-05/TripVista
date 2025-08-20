import React, { useState } from 'react';
import './Hotel.css';

function Hotel() {
  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
    "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  const hotelDataByState = {
  "Andhra Pradesh": [
    { name: "Novotel Vijayawada", image: "https://source.unsplash.com/300x200/?vijayawada", type: "City Hotel" },
    { name: "Haritha Beach Resort", image: "https://source.unsplash.com/300x200/?beach", type: "Coastal Retreat" }
  ],
  "Arunachal Pradesh": [
    { name: "Donyi Polo Ashok", image: "https://source.unsplash.com/300x200/?mountain", type: "Hilltop Stay" },
    { name: "Hotel Pemaling", image: "https://source.unsplash.com/300x200/?valley", type: "Valley View Lodge" }
  ],
  "Assam": [
    { name: "Radisson Blu Guwahati", image: "https://source.unsplash.com/300x200/?guwahati", type: "Luxury Hotel" },
    { name: "Brahmaputra Jungle Resort", image: "https://source.unsplash.com/300x200/?jungle", type: "Eco Stay" }
  ],
  "Bihar": [
    { name: "Hotel Maurya Patna", image: "https://source.unsplash.com/300x200/?patna", type: "Business Hotel" },
    { name: "Bodhgaya Regency", image: "https://source.unsplash.com/300x200/?temple", type: "Pilgrim Stay" }
  ],
  "Chhattisgarh": [
    { name: "Hotel Babylon Inn", image: "https://source.unsplash.com/300x200/?city", type: "Urban Comfort" },
    { name: "Jungle Safari Lodge", image: "https://source.unsplash.com/300x200/?forest", type: "Wildlife Retreat" }
  ],
  "Goa": [
    { name: "Park Hyatt Goa", image: "https://source.unsplash.com/300x200/?goa", type: "Beachfront Resort" },
    { name: "Taj Exotica", image: "https://source.unsplash.com/300x200/?luxury", type: "Luxury Escape" }
  ],
  "Gujarat": [
    { name: "The Fern Ahmedabad", image: "https://source.unsplash.com/300x200/?ahmedabad", type: "Eco Hotel" },
    { name: "Rann Riders", image: "https://source.unsplash.com/300x200/?desert", type: "Desert Camp" }
  ],
  "Haryana": [
    { name: "Vivanta Panchkula", image: "https://source.unsplash.com/300x200/?panchkula", type: "Luxury Stay" },
    { name: "Golden Tulip Gurgaon", image: "https://source.unsplash.com/300x200/?gurgaon", type: "Business Hotel" }
  ],
  "Himachal Pradesh": [
    { name: "Wildflower Hall", image: "https://source.unsplash.com/300x200/?shimla", type: "Hill Retreat" },
    { name: "The Himalayan Manali", image: "https://source.unsplash.com/300x200/?manali", type: "Mountain Lodge" }
  ],
  "Jharkhand": [
    { name: "Hotel Capitol Hill", image: "https://source.unsplash.com/300x200/?ranchi", type: "City Stay" },
    { name: "Netarhat Forest Lodge", image: "https://source.unsplash.com/300x200/?forest", type: "Nature Stay" }
  ],
  "Karnataka": [
    { name: "The Leela Palace Bengaluru", image: "https://source.unsplash.com/300x200/?bengaluru", type: "Luxury Hotel" },
    { name: "Orange County Coorg", image: "https://source.unsplash.com/300x200/?coorg", type: "Coffee Estate Stay" }
  ],
  "Kerala": [
    { name: "Kumarakom Lake Resort", image: "https://source.unsplash.com/300x200/?backwater", type: "Backwater Retreat" },
    { name: "The Leela Kovalam", image: "https://source.unsplash.com/300x200/?cliff", type: "Cliffside Luxury" }
  ],
  "Madhya Pradesh": [
    { name: "Jehan Numa Palace", image: "https://source.unsplash.com/300x200/?bhopal", type: "Heritage Hotel" },
    { name: "Kanha Jungle Lodge", image: "https://source.unsplash.com/300x200/?kanha", type: "Wildlife Stay" }
  ],
  "Maharashtra": [
    { name: "Taj Mahal Palace Mumbai", image: "https://source.unsplash.com/300x200/?mumbai", type: "Iconic Luxury" },
    { name: "Hilton Shillim Retreat", image: "https://source.unsplash.com/300x200/?hill", type: "Wellness Retreat" }
  ],
  "Manipur": [
    { name: "Classic Grande Imphal", image: "https://source.unsplash.com/300x200/?imphal", type: "City Hotel" },
    { name: "Loktak Lake Lodge", image: "https://source.unsplash.com/300x200/?lake", type: "Lakeside Stay" }
  ],
  "Meghalaya": [
    { name: "Ri Kynjai Resort", image: "https://source.unsplash.com/300x200/?shillong", type: "Lake View Retreat" },
    { name: "Polo Towers", image: "https://source.unsplash.com/300x200/?meghalaya", type: "Urban Comfort" }
  ],
  "Mizoram": [
    { name: "Hotel Regency Aizawl", image: "https://source.unsplash.com/300x200/?aizawl", type: "City Stay" },
    { name: "Chaltlang Hill Resort", image: "https://source.unsplash.com/300x200/?hill", type: "Hilltop Lodge" }
  ],
  "Nagaland": [
    { name: "Hotel Japfu Kohima", image: "https://source.unsplash.com/300x200/?kohima", type: "Cultural Stay" },
    { name: "Hornbill Lodge", image: "https://source.unsplash.com/300x200/?tribal", type: "Ethnic Retreat" }
  ],
  "Odisha": [
    { name: "Mayfair Waves Puri", image: "https://source.unsplash.com/300x200/?puri", type: "Beach Resort" },
    { name: "Swosti Premium Bhubaneswar", image: "https://source.unsplash.com/300x200/?temple", type: "City Hotel" }
  ],
  "Punjab": [
    { name: "Hyatt Regency Amritsar", image: "https://source.unsplash.com/300x200/?amritsar", type: "Pilgrim Stay" },
    { name: "The Oberoi Sukhvilas", image: "https://source.unsplash.com/300x200/?luxury", type: "Forest Retreat" }
  ],
  "Rajasthan": [
    { name: "Umaid Bhawan Palace", image: "https://source.unsplash.com/300x200/?palace", type: "Heritage Luxury" },
    { name: "The Oberoi Udaivilas", image: "https://source.unsplash.com/300x200/?udaipur", type: "Lakefront Palace" }
  ],
  "Sikkim": [
    { name: "Mayfair Spa Resort Gangtok", image: "https://source.unsplash.com/300x200/?gangtok", type: "Mountain Retreat" },
    { name: "The Elgin Nor-Khill", image: "https://source.unsplash.com/300x200/?sikkim", type: "Heritage Stay" }
  ],
  "Tamil Nadu": [
    { name: "ITC Grand Chola", image: "https://source.unsplash.com/300x200/?chennai", type: "Luxury Palace Hotel" },
    { name: "Taj Fisherman's Cove", image: "https://source.unsplash.com/300x200/?beach", type: "Beach Resort" }
  ],
  "Telangana": [
    { name: "Taj Falaknuma Palace", image: "https://source.unsplash.com/300x200/?hyderabad", type: "Royal Stay" },
    { name: "Novotel Hyderabad", image: "https://source.unsplash.com/300x200/?city", type: "Business Hotel" }
  ],
  "Tripura": [
    { name: "Hotel Sonar Tori", image: "https://source.unsplash.com/300x200/?agartala", type: "City Stay" },
    { name: "Neermahal Lake Resort", image: "https://source.unsplash.com/300x200/?lake", type: "Heritage Retreat" }
  ],
    "Uttar Pradesh": [
    { name: "Taj View Agra", image: "https://source.unsplash.com/300x200/?agra", type: "Heritage Hotel" },
    { name: "Clarks Varanasi", image: "https://source.unsplash.com/300x200/?varanasi", type: "Pilgrim Stay" }
  ],
  "Uttarakhand": [
    { name: "Ananda in the Himalayas", image: "https://source.unsplash.com/300x200/?himalayas", type: "Wellness Retreat" },
    { name: "The Naini Retreat", image: "https://source.unsplash.com/300x200/?nainital", type: "Lake View Hotel" }
  ],
  "West Bengal": [
    { name: "The Oberoi Grand Kolkata", image: "https://source.unsplash.com/300x200/?kolkata", type: "Colonial Luxury" },
    { name: "Mayfair Darjeeling", image: "https://source.unsplash.com/300x200/?darjeeling", type: "Hill Station Stay" }
  ]
};

  const [state, setState] = useState("Tamil Nadu");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [activeSelector, setActiveSelector] = useState(null);
  const [results, setResults] = useState([]);

  const toggleSelector = (type) => {
    setActiveSelector(prev => (prev === type ? null : type));
  };

  const increment = (setter) => setter(prev => prev + 1);
  const decrement = (setter) => setter(prev => (prev > 0 ? prev - 1 : 0));

  const handleSearch = () => {
    const hotels = hotelDataByState[state] || [];
    setResults(hotels);
  };

  return (
    <div className="hotel-bg">
      <div className="hotel-box">
        {/* 🔹 Row 1 */}
        <div className="search-row">
          <select value={state} onChange={(e) => setState(e.target.value)} className="state-input">
            {states.map((stateName) => (
              <option key={stateName} value={stateName}>{stateName}</option>
            ))}
          </select>
          <input type="date" />
          <input type="date" />
          <select>
            <option>₹1,500 – ₹2,500</option>
            <option>₹2,500 – ₹4,000</option>
            <option>₹4,000+</option>
          </select>
        </div>

        {/* 🔹 Row 2 */}
        <div className="search-row">
          <div className="guest-selector">
            {["adults", "children", "rooms"].map((type) => (
              <div key={type} className={`guest-box ${activeSelector === type ? "active" : ""}`}>
                <button onClick={() => toggleSelector(type)}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
                {activeSelector === type && (
                  <div className="counter-box">
                    <button onClick={() => decrement(
                      type === "adults" ? setAdults :
                      type === "children" ? setChildren :
                      setRooms
                    )}>-</button>
                    <span>{
                      type === "adults" ? adults :
                      type === "children" ? children :
                      rooms
                    }</span>
                    <button onClick={() => increment(
                      type === "adults" ? setAdults :
                      type === "children" ? setChildren :
                      setRooms
                    )}>+</button>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="guest-summary">
            Guests: Adults: {adults}, Children: {children}, Rooms: {rooms}
          </div>

          <button className="search-button" onClick={handleSearch}>SEARCH</button>
        </div>
      </div>

      {/* 🔍 Hotel Results */}
      <div className="hotel-results">
        {results.length > 0 ? (
          results.map((hotel, index) => (
            <div key={index} className="hotel-card">
              <img src={hotel.image} alt={hotel.name} />
              <div>
                <h4>{hotel.name}</h4>
                <p>{hotel.type}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No hotels found for {state}. Try another state or adjust your filters.</p>
        )}
      </div>
    </div>
  );
}

export default Hotel;
