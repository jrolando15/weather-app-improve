const API_KEY = '80b8f015cc49b7ad38af45cbd8880051';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeatherByCity = async (city) => {
    try {
      const response = await fetch(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await response.json();
      if (data.cod !== 200) {
        throw new Error(data.message);
      }
      return data;
    } catch (error) {
      console.error('Error fetching weather by city:', error);
      throw error;
    }
  };
  
  export const fetchForecastByCity = async (city) => {
    try {
      const response = await fetch(`${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await response.json();
      if (data.cod !== '200') {
        throw new Error(data.message);
      }
      return data;
    } catch (error) {
      console.error('Error fetching forecast by city:', error);
      throw error;
    }
  };

  
  export const fetchWeatherByCoordinates = async (latitude, longitude) => {
    try {
      const response = await fetch(`${BASE_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
      const data = await response.json();
      if (data.cod !== 200) {
        throw new Error(data.message);
      }
      return data;
    } catch (error) {
      console.error('Error fetching weather by coordinates:', error);
      throw error;
    }
  };
  
  export const fetchForecastByCoordinates = async (latitude, longitude) => {
    try {
      const response = await fetch(`${BASE_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
      const data = await response.json();
      if (data.cod !== '200') {
        throw new Error(data.message);
      }
      return data;
    } catch (error) {
      console.error('Error fetching forecast by coordinates:', error);
      throw error;
    }
  };