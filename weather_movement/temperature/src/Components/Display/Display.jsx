import React, { useState, useEffect } from 'react';
import PhotoViewer from '../Photoviewer/PhotoViewer';
import axios from 'axios';
import './Display.css';

function Displaypage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const apiKey = 'b1c3cc18614765933ac3f378e3a2f4a2';

    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery},India&appid=${apiKey}&units=metric`
        );

        const data = response.data;
        console.log('Weather Data:', data);

        // Update weather data in state
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error.message);
        // Clear weather data in case of an error
        setWeatherData(null);
      }
    };

    if (searchQuery.trim() !== '') {
      // Fetch weather data only if searchQuery is not empty
      fetchWeatherData();
    }
  }, [searchQuery]);

  return (
    <div>
      <nav className='Navbar'>
        <i className='margin-left'>
          <a className="achor" href='Display.jsx'>
            Weather.com
          </a>
        </i>
        <input
          className="input-bar"
          type="text"
          placeholder=" 🔎 Search For Your Location.....  ⛅"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <PhotoViewer />
      </nav>

      {weatherData && (
        <div>
          <h2>Weather for {weatherData.name}, {weatherData.sys.country}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
         
        </div>
      )}
    </div>
  );
}

export default Displaypage;