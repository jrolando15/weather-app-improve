import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TemperatureChart from './TemperatureChart';

const Forecast = ({ forecastData, theme, tempUnit }) => {
  if (!forecastData || forecastData.length === 0) return null;

  const todayForecast = forecastData[0];
  const nextDaysForecast = forecastData.slice(1);

  return (
    <div className="container mt-4" style={{ backgroundColor: theme.containerColor, color: theme.textColor }}>
      <h3 className="text-center">Weather Forecast</h3>
      <div className="row">
        <div className="col-md-6">
          <h4 className="text-center">Today's Forecast</h4>
          <div className="card" style={{ backgroundColor: theme.containerColor, color: theme.textColor }}>
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h5 className="card-title">{todayForecast.date}</h5>
                <p className="card-text">Temp: {todayForecast.temp}°{tempUnit === 'celsius' ? 'C' : 'F'}</p>
                <p className="card-text">{todayForecast.description}</p>
              </div>
              <img
                src={`http://openweathermap.org/img/wn/${todayForecast.icon}@2x.png`}
                alt={todayForecast.description}
                className="weather-icon"
              />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <TemperatureChart forecastData={forecastData} theme={theme} tempUnit={tempUnit} />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12">
          <h4 className="text-center">5-Day Forecast</h4>
        </div>
        {nextDaysForecast.map((day, index) => (
          <div className="col-md-3 col-sm-6 mb-3" key={index}>
            <div className="card h-100" style={{ backgroundColor: theme.containerColor, color: theme.textColor }}>
              <div className="card-body text-center">
                <h5 className="card-title">{day.date}</h5>
                <img
                  src={`http://openweathermap.org/img/wn/${day.icon}.png`}
                  alt={day.description}
                  className="mb-2"
                />
                <p className="card-text">Temp: {day.temp}°{tempUnit === 'celsius' ? 'C' : 'F'}</p>
                <p className="card-text">{day.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;