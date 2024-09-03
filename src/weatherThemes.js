// src/weatherThemes.js

export const getWeatherTheme = (description) => {
    const lowerDesc = description.toLowerCase();
    if (lowerDesc.includes('clear')) {
      return { background: 'Clear', textColor: '#333', containerColor: 'rgba(255, 255, 255, 0.8)' };
    } else if (lowerDesc.includes('cloud')) {
      return { background: 'Clouds', textColor: '#333', containerColor: 'rgba(255, 255, 255, 0.8)' };
    } else if (lowerDesc.includes('rain') || lowerDesc.includes('drizzle')) {
      return { background: 'Rain', textColor: '#fff', containerColor: 'rgba(0, 0, 0, 0.6)' };
    } else if (lowerDesc.includes('snow')) {
      return { background: 'Snow', textColor: '#333', containerColor: 'rgba(255, 255, 255, 0.8)' };
    } else if (lowerDesc.includes('thunder')) {
      return { background: 'Thunderstorm', textColor: '#fff', containerColor: 'rgba(0, 0, 0, 0.6)' };
    } else {
      return { background: 'Default', textColor: '#333', containerColor: 'rgba(255, 255, 255, 0.8)' };
    }
  };