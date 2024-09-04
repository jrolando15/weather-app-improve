# Weather App

This project implements a weather application using React. It fetches weather data and forecasts based on city names or the user's current location. The app dynamically updates its background and theme according to the weather conditions.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [API Integration](#api-integration)
- [Styles](#styles)
- [License](#license)

## Installation

To run this project, ensure you have Node.js installed. Then, install the necessary dependencies using npm:

```bash
npm install
```

## Usage
1. Clone the repository:
```bash
git clone <repository-url>
cd weather-app
```

2. Set up environnment variables
Create a .env file in the root directory and add your API keys:
```bash
REACT_APP_OPENWEATHER_API_KEY=<Your OpenWeatherMap API Key>
REACT_APP_UNSPLASH_ACCESS_KEY=<Your Unsplash API Key>
```

3. Run the application
```bash
npm start
```

## Project Structure
```bash
weather-app/
├── src/
│   ├── components/
│   │   ├── SearchBar.js
│   │   ├── WeatherDisplay.js
│   │   ├── Forecast.js
│   │   ├── LocationWeather.js
│   │   └── TemperatureChart.js
│   ├── api.js
│   ├── api_pictures.js
│   ├── weatherThemes.js
│   ├── styles/
│   │   └── custom.css
│   ├── App.js
│   └── index.js
└── README.md
```

## Components
- App.js: Main component managing state and rendering other components. Handles fetching weather data and updating the UI.
  
- SearchBar.js: Provides a text input for users to enter a city name and search for weather data.

- WeatherDisplay.js: Displays current weather details such as temperature, humidity, and wind speed.

- Forecast.js: Shows a five-day weather forecast and includes a temperature chart.

- LocationWeather.js: Fetches weather data based on the user's current location using geolocation.

- TemperatureChart.js: Renders a line chart of temperature variations over the forecast period using Chart.js.


## Api integration
- OpenWeatherMap API: Fetches current weather and forecast data.
- Unsplash API: Retrieves background images based on weather conditions.

## Styles 
Custom CSS is defined in src/styles/custom.css, including general styles, search bar, weather display, and responsive design.

## License
This project is licensed under the MIT License.
text
```
This README provides a clear and organized overview of the Weather App project, making it easy for users and contributors to understand and engage with the project.
```
