import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './TrainSearch.css'; // You need to style accordingly, can copy Flights.css as base

const PassengerSelector = ({ label, count, setCount }) => (
  <div className="passenger-row">
    <div className="passenger-label">
      <span className="passenger-title">{label}</span>
    </div>
    <div className="passenger-controls">
      <button onClick={() => setCount(Math.max(0, count - 1))}>−</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  </div>
);

const Trains = () => {
  const [tripType, setTripType] = useState('Round-trip');
  const [fromStation, setFromStation] = useState('');
  const [toStation, setToStation] = useState('');
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [showDepartCalendar, setShowDepartCalendar] = useState(false);
  const [showReturnCalendar, setShowReturnCalendar] = useState(false);

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [seniors, setSeniors] = useState(0);

  const [trainClass, setTrainClass] = useState('Sleeper');
  const [activePanel, setActivePanel] = useState(null);

  const stations = ['New Delhi', 'Mumbai CST', 'Howrah', 'Chennai Central', 'Bangalore City', 'Hyderabad Deccan', 'Pune', 'Ahmedabad', 'Kolkata', 'Lucknow', 'Jaipur'];

  const trainClasses = ['Sleeper', 'Second AC', 'Third AC', 'First AC', 'Chair Car', 'Second Sitting'];

  const formatDateDisplay = date =>
    date ? date.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) : '';

  const passengerSummary = `${adults} Adult${adults > 1 ? 's' : ''}${children > 0 ? `, ${children} Child${children > 1 ? 'ren' : ''}` : ''}${seniors > 0 ? `, ${seniors} Senior${seniors > 1 ? 's' : ''}` : ''}`;

  const handleSearch = () => {
    console.log({
      tripType,
      fromStation,
      toStation,
      departureDate,
      returnDate,
      passengers: { adults, children, seniors },
      trainClass
    });
    alert('Train search triggered! Check console for selected values.');
  };

  return (
    <div className="train-container">
      <div className="search-bar">
        <div className="trip-type-toggle">
          {['One-way', 'Round-trip'].map(type => (
            <button
              key={type}
              className={`trip-btn ${tripType === type ? 'active' : ''}`}
              onClick={() => setTripType(type)}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="route-row">
          <div className="route-box">
            <div className="location">
              <label className="location-label">From</label>
              <input
                type="text"
                className="location-select"
                placeholder="From Station"
                value={fromStation}
                onChange={e => setFromStation(e.target.value)}
                onFocus={() => setActivePanel('from')}
              />
              {activePanel === 'from' && (
                <div className="autocomplete-popup">
                  {stations
                    .filter(s => fromStation.length >= 2 && s.toLowerCase().startsWith(fromStation.toLowerCase()))
                    .map(s => (
                      <div
                        key={s}
                        className="autocomplete-option"
                        onClick={() => {
                          setFromStation(s);
                          setActivePanel(null);
                        }}
                      >
                        🚉 {s}
                      </div>
                    ))}
                </div>
              )}
            </div>

            <div className="switch-icon">⇄</div>

            <div className="location">
              <label className="location-label">To</label>
              <input
                type="text"
                className="location-select"
                placeholder="To Station"
                value={toStation}
                onChange={e => setToStation(e.target.value)}
                onFocus={() => setActivePanel('to')}
              />
              {activePanel === 'to' && (
                <div className="autocomplete-popup">
                  {stations
                    .filter(s => toStation.length >= 2 && s.toLowerCase().startsWith(toStation.toLowerCase()))
                    .map(s => (
                      <div
                        key={s}
                        className="autocomplete-option"
                        onClick={() => {
                          setToStation(s);
                          setActivePanel(null);
                        }}
                      >
                        🚉 {s}
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>

          {/* Dates Section */}
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
              onClick={() => setActivePanel(activePanel === 'passenger' ? null : 'passenger')}
            >
              {passengerSummary}
            </div>

            <div
              className="summary-box"
              onClick={() => setActivePanel(activePanel === 'class' ? null : 'class')}
            >
              {trainClass}
            </div>

            <div className="summary-box">IRCTC Verified</div>
          </div>

          {activePanel === 'passenger' && (
            <div className="passenger-panel">
              <PassengerSelector label="Adults" count={adults} setCount={setAdults} />
              <PassengerSelector label="Children" count={children} setCount={setChildren} />
              <PassengerSelector label="Seniors" count={seniors} setCount={setSeniors} />
            </div>
          )}

          {activePanel === 'class' && (
            <div className="class-panel">
              {trainClasses.map(cls => (
                <div
                  key={cls}
                  className={`class-option ${trainClass === cls ? 'active' : ''}`}
                  onClick={() => {
                    setTrainClass(cls);
                    setActivePanel(null);
                  }}
                >
                  {cls}
                </div>
              ))}
            </div>
          )}
        </div>

        <button className="search-btn" onClick={handleSearch}>
          Search Trains
        </button>
      </div>

      {/* Deals Section */}
      <div className="deals-section">
        <h2>Popular Train Routes Under ₹500</h2>
        <div className="deals-scroll">
          {[
            {
              city: 'Delhi → Agra',
              price: '₹120 – ₹400',
              duration: '2h 00m',
              date: 'Taj Express & Intercity Express',
              image: '/images/Train/agra.jpg'
            },
            {
            
              city: 'Mumbai → Pune',
              price: '₹150 – ₹300',
              duration: '3h 15m',
              date: 'Deccan Express & Sinhagad Express',
              image: '/images/Train/pune.jpg'
            },
            {
              city: 'Bangalore → Chennai',
              price: '₹200 – ₹450',
              duration: '5h 00m',
              date: 'Shatabdi Express & Lalbagh Express',
              image: '/images/Train/chennai.jpg'
            },
            {
              city: 'Hyderabad → Vijayawada',
              price: '₹180 – ₹380',
              duration: '4h 30m',
              date: 'Vande Bharat & Intercity Express',
              image: '/images/Train/vijayawada.jpg'
            },
            {
              city: 'Kolkata → Patna',
              price: '₹250 – ₹480',
              duration: '6h 30m',
              date: 'Howrah Express & Jan Shatabdi',
              image: '/images/Train/patna.jpg'
            },
            {
              city: 'Jaipur → Jodhpur',
              price: '₹190 – ₹360',
              duration: '5h 00m',
              date: 'Mandore Express & Intercity Express',
              image: '/images/Train/jodhapur.jpg'
            }
          ].map(deal => (
            <div className="deal-card" key={deal.city}>
              <img src={deal.image} alt={deal.city} className="deal-image" />
              <div className="deal-info">
                <h3>{deal.city}</h3>
                <p>{deal.duration}</p>
                <p>{deal.date}</p>
                <div className="deal-price">From <strong>{deal.price}</strong></div>
              </div>
            </div>
          ))}
        </div>
      </div>

     
      
    </div>
  );
};

export default Trains;
