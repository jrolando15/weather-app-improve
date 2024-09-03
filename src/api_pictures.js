// src/api_pictures.js

import { getWeatherTheme } from './weatherThemes';

const weatherSearchQueries = {
  'Clear': 'clear sky sunny weather landscape',
  'Clouds': 'cloudy overcast sky cityscape',
  'Rain': 'rainy weather scene',
  'Drizzle': 'light rain drizzle weather',
  'Thunderstorm': 'thunderstorm dramatic sky',
  'Snow': 'snowy landscape winter scene',
  'Default': 'weather landscape'
};

export const fetchWeatherStateImage = async (weatherDescription) => {
  const apiKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
  
  const theme = getWeatherTheme(weatherDescription);
  
  const searchQuery = weatherSearchQueries[theme.background] || weatherSearchQueries['Default'];

  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(searchQuery)}&client_id=${apiKey}&per_page=1&orientation=landscape`;

  try {
    const response = await fetch(url);
    console.log('Unsplash API response:', response);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log('Image data:', data);
    if (data.results.length > 0) {
      return data.results[0].urls.regular;
    }
  } catch (error) {
    console.error('Error fetching image from Unsplash:', error);
  }
  return null;
};


