import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const TemperatureChart = ({ forecastData, theme, tempUnit }) => {
  if (!forecastData || forecastData.length === 0) return null;

  const labels = forecastData.map(day => day.date);
  const temperatures = forecastData.map(day => day.temp);

  const chartData = {
    labels,
    datasets: [
      {
        label: `Temperature (°${tempUnit === 'celsius' ? 'C' : 'F'})`,
        data: temperatures,
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        ticks: { color: theme.textColor },
        grid: { color: theme.textColor + '33' },
      },
      x: {
        ticks: { color: theme.textColor },
        grid: { color: theme.textColor + '33' },
      },
    },
    plugins: {
      legend: {
        labels: { color: theme.textColor },
      },
    },
  };

  return (
    <div className="container mt-4">
      <h3 className="text-center" style={{ color: theme.textColor }}>Temperature Variation</h3>
      <div className="row justify-content-center">
        <div className="col-md-12">
          <Line data={chartData} options={options} height={200} />
        </div>
      </div>
    </div>
  );
};

export default TemperatureChart;