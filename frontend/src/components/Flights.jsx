import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Flights.css';

const PassengerSelector = ({ label, ageRange, count, setCount }) => (
  <div className="passenger-row">
    <div className="passenger-label">
      <span className="passenger-title">{label}</span>
      <span className="passenger-age">{ageRange}</span>
    </div>
    <div className="passenger-controls">
      <button onClick={() => setCount(Math.max(0, count - 1))}>−</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  </div>
);

const Flights = () => {
  const [tripType, setTripType] = useState('Round-trip');
  const [fromAirport, setFromAirport] = useState('');
  const [toAirport, setToAirport] = useState('');
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [showDepartCalendar, setShowDepartCalendar] = useState(false);
  const [showReturnCalendar, setShowReturnCalendar] = useState(false);

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const [travelClass, setTravelClass] = useState('Economy');
  const [activePanel, setActivePanel] = useState(null); // 'passenger', 'class', 'from', 'to'

  const airports = ['Delhi','Mumbai','Bengaluru','Hyderabad','Chennai','Kolkata','Ahmedabad','Pune','Jaipur','Goa','Lucknow','Trivandrum','Kochi','Coimbatore','Tiruchirappalli','Madurai','Visakhapatnam','Varanasi','Patna','Guwahati','Nagpur','Amritsar','Indore','Bhubaneswar','Ranchi','Raipur','Srinagar','Dehradun','Chandigarh','Vadodara','Surat','Mangalore','Jodhpur','Leh','Imphal','Agartala','Silchar','Aizawl','Dimapur','Port Blair','Tirupati','Rajahmundry','Jabalpur','Gaya','Bareilly','Belgaum','Dibrugarh','Hubli','Kozhikode','Kannur'];

  const travelClasses = ['Economy', 'Premium Economy', 'Business Class', 'First Class'];

  const formatDateDisplay = date =>
    date ? date.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) : '';

  const passengerSummary = `${adults} Adult${adults > 1 ? 's' : ''}${children > 0 ? `, ${children} Child${children > 1 ? 'ren' : ''}` : ''}${infants > 0 ? `, ${infants} Infant${infants > 1 ? 's' : ''}` : ''}`;

  const handleSearch = () => {
    console.log({
      tripType,
      fromAirport,
      toAirport,
      departureDate,
      returnDate,
      passengers: { adults, children, infants },
      travelClass
    });
    alert('Search triggered! Check console for selected values.');
  };

  return (
    <div className="train-container">
      <div className="search-bar">
        {/* Trip Type */}
        <div className="trip-type-toggle">
          {['One-way', 'Round-trip', 'Multi-city'].map(type => (
            <button
              key={type}
              className={`trip-btn ${tripType === type ? 'active' : ''}`}
              onClick={() => setTripType(type)}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Route and Dates */}
        <div className="route-row">
          {/* From–To Section */}
          <div className="route-box">
            <div className="location">
              <label className="location-label">From</label>
              <input
                className="location-select"
                type="text"
                placeholder="From"
                value={fromAirport}
                onChange={e => setFromAirport(e.target.value)}
                onFocus={() => setActivePanel('from')}
              />
              {activePanel === 'from' && (
                <div className="autocomplete-popup">
                  {airports
                    .filter(a => fromAirport.length >= 2 && a.toLowerCase().startsWith(fromAirport.toLowerCase()))

                    .map(a => (
                      <div
                        key={a}
                        className="autocomplete-option"
                        onClick={() => {
                          setFromAirport(a);
                          setActivePanel(null);
                        }}
                      >
                        ✈️ {a}, India ({a.slice(0, 3).toUpperCase()})
                      </div>
                    ))}
                </div>
              )}
            </div>

            <div className="switch-icon">⇄</div>

            <div className="location">
              <label className="location-label">To</label>
              <input
                className="location-select"
                type="text"
                placeholder="To"
                value={toAirport}
                onChange={e => setToAirport(e.target.value)}
                onFocus={() => setActivePanel('to')}
              />
              {activePanel === 'to' && (
  <div className="autocomplete-popup">
    {airports.map(a => {
      if (toAirport.length >= 2 && a.toLowerCase().startsWith(toAirport.toLowerCase())) {
        return (
          <div
            key={a}
            className="autocomplete-option"
            onClick={() => {
              setToAirport(a);
              setActivePanel(null);
            }}
          >
            ✈️ {a}, India ({a.slice(0, 3).toUpperCase()})
          </div>
        );
      }
      return null;
    })}
  </div>
)}

            </div>
          </div>

          {/* Depart–Return Section */}
          <div className="date-row">
            <div className="date-container">
              <div className="date-box" onClick={() => {
                setShowDepartCalendar(!showDepartCalendar);
                setShowReturnCalendar(false);
              }}>
                <label className="date-label">Depart</label>
                <div className="date-value">
                  {formatDateDisplay(departureDate) || 'Select Date'}
                </div>
              </div>
              {showDepartCalendar && (
                <div className="calendar-popup">
                  <Calendar
                    onChange={date => {
                      setDepartureDate(date);
                      setShowDepartCalendar(false);
                    }}
                    value={departureDate || new Date()}
                  />
                </div>
              )}
            </div>

            <div className="date-container">
              <div
                className={`date-box ${tripType === 'One-way' ? 'disabled' : ''}`}
                onClick={() => {
                  if (tripType !== 'One-way') {
                    setShowReturnCalendar(!showReturnCalendar);
                    setShowDepartCalendar(false);
                  }
                }}
              >
                <label className="date-label">Return</label>
                <div className="date-value">
                  {formatDateDisplay(returnDate) || 'Select Date'}
                </div>
              </div>
              {showReturnCalendar && tripType !== 'One-way' && (
                <div className="calendar-popup">
                  <Calendar
                    onChange={date => {
                      setReturnDate(date);
                      setShowReturnCalendar(false);
                    }}
                    value={returnDate || new Date()}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Summary Row */}
        <div className="summary-row-wrapper">
          <div className="summary-row">
            <div
              className="summary-box"
              onClick={() =>
                setActivePanel(activePanel === 'passenger' ? null : 'passenger')
              }
            >
              {passengerSummary} 
            </div>

            <div
              className="summary-box"
              onClick={() =>
                setActivePanel(activePanel === 'class' ? null : 'class')
              }
            >
              {travelClass} 
            </div>

            <div className="summary-box">5 Payment Types </div>
          </div>

          {/* Passenger Panel */}
          {activePanel === 'passenger' && (
            <div className="passenger-panel">
              <PassengerSelector label="Adults" ageRange=">12 Years" count={adults} setCount={setAdults} />
              <PassengerSelector label="Children" ageRange="2–12 Years" count={children} setCount={setChildren} />
              <PassengerSelector label="Infants" ageRange="<2 Years" count={infants} setCount={setInfants} />
            </div>
          )}

          {/* Class Panel */}
          {activePanel === 'class' && (
            <div className="class-panel">
              {travelClasses.map(cls => (
                <div
                  key={cls}
                  className={`class-option ${travelClass === cls ? 'active' : ''}`}
                  onClick={() => {
                    setTravelClass(cls);
                    setActivePanel(null);
                  }}
                >
                  {cls}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Search Button */}
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>

      {/* Travel Deals Section */}
      <div className="deals-section">
        <div className="deals-header">
          <h2>Travel deals under ₹ 6,827</h2>
          
        </div>

        <div className="deals-scroll">
          {[
            {
              city: 'Chennai → Madurai',
              price: '₹2,800 – ₹3,200',
              duration: '1h 10m, direct',
              date: 'Bull Statue & Gandhi Museum',
              image: '/images/Flight/1.jpg'
            },
            {
              city: 'Bengaluru → Kochi',
              price: '₹3,500–₹4,000	',
              duration: '1h 15m, direct',
              date: 'Subramaniyapuram Park & Marine Drive',
              image: '/images/Flight/2.jpg'
            },
            {
              city: 'Hyderabad → Tiruchy',
              price: '₹3,800–₹4,500',
              duration: '1h 30m, indirect',
              date: 'Rockfort Temple & Besant Nagar Park',
              image: '/images/Flight/3.jpg'
            },
            {
              city: 'Mumbai → Coimbatore',
              price: '₹4,500–₹5,800',
              duration: '1h 45m, direct',
              date: 'VOC Zoo & Koranad Municipality Park',
              image: '/images/Flight/4.jpg'
            },
            {
              city: 'Delhi → Jaipur',
              price: '₹2,900–₹3,400',
              duration: '1h 00m, direct',
              date: 'Amer Fort & Jantar Mantar',
              image: '/images/Flight/5.jpg'
            },
            {
              city: 'Kolkata → Bhubaneswar',
              price: '₹3,200–₹3,800',
              duration: '1h 10m, direct',
              date: 'Nandankanan Zoo & Lingaraj Temple',
              image: '/images/Flight/6.jpg'
            },
            {
              city: 'Ahmedabad → Udaipur',
              price: '₹3,600–₹4,200',
              duration: '1h 05m, indirect',
              date: 'Lake Pichola & City Palace',
              image: '/images/Flight/7.jpg'

            },
            {
              city: 'Pune → Goa',
              price: '₹2,700–₹3,500',
              duration: '1h 10m, direct',
              date: 'Miramar Beach & Dona Paula Viewpoint',
               image: '/images/Flight/8.jpg'
            }
          ].map(deal => (
            <div className="deal-card" key={deal.city}>
              <img src={deal.image} alt={deal.city} className="deal-image" />
              <div className="deal-info">
                <h3>{deal.city}</h3>
                <p>{deal.duration}</p>
                <p>{deal.date}</p>
                <div className="deal-price">From & To <strong>{deal.price}</strong></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Travel Pro Tools Section */}
<div className="pros-section">
  <h2>For travel pros</h2>
  <div className="pros-cards">
    {[
      {
        title: 'FAST BOOKING',
        desc: 'We offer fast booking, fantastic products, competitive pricing & amazing experience',
        image: 'https://via.placeholder.com/300x200?text=Explore'
      },
      {
        title: 'EXCITING DEALS',
        desc: 'Enjoy exciting deals on flights, hotels, buses, car rental, tour packages and more.',
        image: 'https://via.placeholder.com/300x200?text=Price+Alerts'
      },
      {
        title: '24/7 SUPPORT',
        desc: 'Get assistance 24/7 on any kind of travel related query. We are happy to assist you.',
        image: 'https://via.placeholder.com/300x200?text=Flight+Tracker'
      }
    ].map((tool, idx) => (
      <div className="pros-card" key={idx}>
        <img src={tool.image} alt={tool.title} className="pros-image" />
        <h3>{tool.title}</h3>
        <p>{tool.desc}</p>
      </div>
    ))}
  </div>
</div>


{/* About Section */}
<div className="about-section">
  <h2>About Cheapflights</h2>
  <p>
    Cheapflights is your trusted partner in navigating the expansive travel landscape. Our sophisticated search engine is here to simplify your travel planning by providing you with a seamless experience as you search for flights, hotels, and car rentals. By charging our travel providers and advertisers, we are able to stay committed to offering you a service that is not only free but also aligned with delivering the most value to you, the traveller! At Cheapflights, we're excited to be a part of your travel story.
  </p>
  <h3>Create a Price Alert and Save</h3>
  <p>
    To enhance your planning, we offer the Price Alert function, a tool designed to keep you informed about the best possible deals. If you're eyeing a flight, hotel, or car rental but aren't ready to book, simply activate a price alert with your email address. You'll receive updates when prices drop, allowing you to book at just the right moment.
  </p>
  <h3>How to get the most out of Cheapflights</h3><p>
  <ul>
    <li>Utilise the filtering tools to customise your search results, aligning them with your specific travel needs, whether that be cost, convenience, or comfort.</li>
    <li>Pay attention to the total price, which includes any additional fees. Transparency is a cornerstone of our service, ensuring that the price you see is the price you pay.</li>
    <li>Be aware of the dynamic nature of travel pricing. Deals can change rapidly due to factors beyond our control, so timely booking is advisable when you find a suitable option.</li>
  </ul></p>
</div>

    </div>
  );
};

export default Flights;
