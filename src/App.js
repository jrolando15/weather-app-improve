import React, { useState, useCallback } from 'react';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import Forecast from './components/Forecast';
import LocationWeather from './components/LocationWeather';
import {
  fetchWeatherByCity,
  fetchForecastByCity,
  fetchWeatherByCoordinates,
  fetchForecastByCoordinates
} from './api';
import { fetchWeatherStateImage } from './api_pictures';
import { getWeatherTheme } from './weatherThemes';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [backgroundImage, setBackgroundImage] = useState('');
  const [theme, setTheme] = useState({ textColor: '#333', containerColor: 'rgba(255, 255, 255, 0.8)' });
  const [tempUnit, setTempUnit] = useState('celsius');

  const convertTemp = useCallback((temp, toUnit) => {
    if (toUnit === 'fahrenheit') {
      return ((temp * 9/5) + 32).toFixed(1);
    }
    return temp.toFixed(1);
  }, []);

  const toggleTempUnit = useCallback(() => {
    setTempUnit(prevUnit => {
      const newUnit = prevUnit === 'celsius' ? 'fahrenheit' : 'celsius';
      if (weatherData) {
        setWeatherData(prevData => ({
          ...prevData,
          temp: convertTemp(prevData.originalTemp, newUnit),
          feels_like: convertTemp(prevData.originalFeelsLike, newUnit)
        }));
      }
      if (forecastData.length > 0) {
        setForecastData(prevForecast => 
          prevForecast.map(day => ({
            ...day,
            temp: convertTemp(day.originalTemp, newUnit)
          }))
        );
      }
      return newUnit;
    });
  }, [weatherData, forecastData, convertTemp]);

  const handleFetchWeatherData = async (city) => {
    try {
      const weatherData = await fetchWeatherByCity(city);
      setWeatherData({
        city: weatherData.name,
        temp: convertTemp(weatherData.main.temp, tempUnit),
        feels_like: convertTemp(weatherData.main.feels_like, tempUnit),
        humidity: weatherData.main.humidity,
        wind_speed: weatherData.wind.speed,
        description: weatherData.weather[0].description,
        icon: weatherData.weather[0].icon,
        originalTemp: weatherData.main.temp,
        originalFeelsLike: weatherData.main.feels_like
      });
  
      const forecastData = await fetchForecastByCity(city);
      const dailyForecast = forecastData.list.filter((_, index) => index % 8 === 0).map((day) => ({
        date: new Date(day.dt_txt).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
        temp: convertTemp(day.main.temp, tempUnit),
        description: day.weather[0].description,
        icon: day.weather[0].icon,
        city: weatherData.name,
        originalTemp: day.main.temp
      }));
      setForecastData(dailyForecast);
  
      const imageUrl = await fetchWeatherStateImage(weatherData.weather[0].description);
      if (imageUrl) {
        setBackgroundImage(imageUrl);
      } else {
        console.error('No image found for the weather state');
      }

      const newTheme = getWeatherTheme(weatherData.weather[0].description);
      setTheme(newTheme);
  
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleFetchWeatherByLocation = async (latitude, longitude) => {
    try {
      const weatherData = await fetchWeatherByCoordinates(latitude, longitude);
      setWeatherData({
        city: weatherData.name,
        temp: convertTemp(weatherData.main.temp, tempUnit),
        feels_like: convertTemp(weatherData.main.feels_like, tempUnit),
        humidity: weatherData.main.humidity,
        wind_speed: weatherData.wind.speed,
        description: weatherData.weather[0].description,
        icon: weatherData.weather[0].icon,
        originalTemp: weatherData.main.temp,
        originalFeelsLike: weatherData.main.feels_like
      });
  
      const forecastData = await fetchForecastByCoordinates(latitude, longitude);
      const dailyForecast = forecastData.list.filter((_, index) => index % 8 === 0).map((day) => ({
        date: new Date(day.dt_txt).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
        temp: convertTemp(day.main.temp, tempUnit),
        description: day.weather[0].description,
        icon: day.weather[0].icon,
        city: weatherData.name,
        originalTemp: day.main.temp
      }));
      setForecastData(dailyForecast);
  
      const imageUrl = await fetchWeatherStateImage(weatherData.weather[0].description);
      if (imageUrl) {
        setBackgroundImage(imageUrl);
      } else {
        console.error('No image found for the weather state');
      }

      const newTheme = getWeatherTheme(weatherData.weather[0].description);
      setTheme(newTheme);
  
    } catch (error) {
      console.error('Error fetching weather data by location:', error);
    }
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '20px',
        color: theme.textColor,
      }}
    >
      <div className="container" style={{ backgroundColor: theme.containerColor }}> 
        <h1 className="text-center mt-4" style={{ color: theme.textColor }}>Weather App</h1>
        <button onClick={toggleTempUnit} className="btn btn-primary mb-3">
          Switch to {tempUnit === 'celsius' ? 'Fahrenheit' : 'Celsius'}
        </button>
        <SearchBar onSearch={handleFetchWeatherData} />
        <LocationWeather onFetchWeather={handleFetchWeatherByLocation} />
        <WeatherDisplay weatherData={weatherData} theme={theme} tempUnit={tempUnit} />
        <Forecast forecastData={forecastData} theme={theme} tempUnit={tempUnit} />
      </div>
    </div>
  );
}

export default App;