import React, { useState } from 'react';
import TouristNavbar from './components/TouristNavbar';
import 

function App() {
  const [results, setResults] = useState([]);

  const handleSearch = async (query) => {
    const res = await fetch(`http://localhost:5000/search?q=${query}`);
    const data = await res.json();
    setResults(data);
  };

  return (
    <div>
      <TouristNavbar onSearch={handleSearch} />
      <main style={{ padding: '20px' }}>
        <h1>Welcome to ExploreX</h1>
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
    </div>
  );
}

export default App;