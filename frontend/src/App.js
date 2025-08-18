import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import TouristNavbar from './components/TouristNavbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import ForgotPassword from './components/ForgotPassword';
import ImageSlider from './ImageSlider';
import Flights from './components/Flights';

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

  const hideNavbarRoutes = ['/login', '/Signup', '/forgot-password'];


  return (
    <div>
      {/* Conditionally render TouristNavbar */}
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
              <p>Search for a destination to begin.</p>
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
        {/* Optional: 404 fallback */}
        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
