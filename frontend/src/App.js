import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import TouristNavbar from './components/TouristNavbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import ForgotPassword from './components/ForgotPassword';
import ImageSlider from './ImageSlider';
import Flights from './components/Flights';
import Hotel from './components/Hotel';
import Event from './components/Event';
import Packages from './components/Packages';
import TrainSearch from './components/TrainSearch';
import Festival from './components/Festival';
import Homestay from './components/Homestay';
import HotelBooking from './components/HotelBooking';
import Index from './components/Index';

function App() {
  const [results, setResults] = useState([]);
  const location = useLocation();

  const handleSearch = async (query) => {
    try {
      const res = await fetch(`http://localhost:5000/search?q=${query}`);
      const data = await res.json();
      setResults(data);
    } catch (err) {
      console.error("Search error:", err);
    }
  };

  const hideNavbarRoutes = ['/login', '/signup', '/forgot-password'];

  return (
    <div>
      {!hideNavbarRoutes.includes(location.pathname) && (
        <>
          <TouristNavbar onSearch={handleSearch} />
          <main style={{ padding: '20px' }}>
            {results.length > 0 ? (
              <ul>
                {results.map((place, index) => (
                  <li key={index}>{place.name} – {place.country}</li>
                ))}
              </ul>
            ) : (
              <p></p>
            )}
          </main>
        </>
      )}

      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/home' element={<Home />} />
        <Route path='/flight' element={<Flights />} />
        <Route path='/slider' element={<ImageSlider />} />
        <Route path='/packages' element={<Packages />} />
        <Route path='/hotel' element={<Hotel />} />
        <Route path='/event' element={<Event />} />
        <Route path='/train' element={<TrainSearch />} />
        <Route path='/festival' element={<Festival />} />
        <Route path='/homestay' element={<Homestay />} />
        <Route path='/hotelbooking' element={<HotelBooking />} />
        <Route path='/' element={<Index/>} /> {/* Changed path to '/' to be your homepage */}
      </Routes>
    </div>
  );
}

export default App;