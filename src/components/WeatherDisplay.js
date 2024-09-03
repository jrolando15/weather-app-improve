import React from 'react';

const WeatherDisplay = ({ weatherData, theme, tempUnit }) => {
  if (!weatherData) return null;

  const { city, temp, feels_like, humidity, wind_speed, description, icon } = weatherData;

  return (
    <div className="container mt-4" style={{ backgroundColor: theme.containerColor, color: theme.textColor }}>
      <h2 className="text-center">{city}</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card" style={{ backgroundColor: theme.containerColor, color: theme.textColor }}>
            <div className="card-body">
              <h3 className="card-title">{temp}°{tempUnit === 'celsius' ? 'C' : 'F'}</h3>
              <p className="card-text">Feels like: {feels_like}°{tempUnit === 'celsius' ? 'C' : 'F'}</p>
              <p className="card-text">Humidity: {humidity}%</p>
              <p className="card-text">Wind Speed: {wind_speed} m/s</p>
              <p className="card-text">{description}</p>
              <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={description} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;