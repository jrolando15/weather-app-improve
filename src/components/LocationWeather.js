import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LocationWeather = ({ onFetchWeather }) => {
  const [loading, setLoading] = useState(false);

  const handleLocationWeather = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        onFetchWeather(latitude, longitude);
        setLoading(false);
      },
      (error) => {
        alert('Unable to retrieve your location');
        setLoading(false);
      }
    );
  };

  return (
    <div className="d-flex justify-content-center mt-3">
      <div className="col-md-4"> {/* Center the button and limit its width */}
        <button
          className="btn btn-secondary w-100" // Make the button full width within the column
          onClick={handleLocationWeather}
          disabled={loading}
        >
          {loading ? 'Fetching Location...' : 'Get Weather by Location'}
        </button>
      </div>
    </div>
  );
};

export default LocationWeather;