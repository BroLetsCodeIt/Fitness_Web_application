
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement, Tooltip, Legend} from 'chart.js'
Chart.register(ArcElement,Tooltip,Legend);

const CalorieChart = ({ protein, carbs, fat }) => {
  const data = {
    labels: ['Protein', 'Carbs', 'Fat'],
    datasets: [
      {

        data: [protein, carbs, fat],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div className="calorie-chart">
      <Doughnut data={data} />
    </div>
  );
};

export default CalorieChart;
