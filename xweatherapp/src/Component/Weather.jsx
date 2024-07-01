import React, { useEffect, useState } from "react";
import "./Weather.css";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const api_key = '4cfcb4ff206d40e8a35141605240504';

  const fetchWeateher = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}`
      );
      setWeather(response.data);
    setIsLoading(false);

    } catch (error) {
      alert("Failed to fetch weather data");
    }
  };

  const handleInput = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="whtr">
      <input
        className="inp"
        type="text"
        onChange={handleInput}
        placeholder="Enter city name"
      />
      <button className="btn" onClick={fetchWeateher}>
        Search
      </button>

      {isLoading ? (
        <p>Loading data...</p>
      ) : (
        weather && (
          <div className="weather-cards">
            <div className="weather-card">
              <h3>Temperature</h3>
              <p>{weather.current.temp_c}</p>
            </div>
            <div className="weather-card">
              <h3>Humidity</h3>
              <p>{weather.current.humidity}</p>
            </div>
            <div className="weather-card">
              <h3>Condition</h3>
              <p>{weather.current.condition.text}</p>
            </div>
            <div className="weather-card">
              <h3>Wind Speed</h3>
              <p>{weather.current.wind_kph}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Weather;
