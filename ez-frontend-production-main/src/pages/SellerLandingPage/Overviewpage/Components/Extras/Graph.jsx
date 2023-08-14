import React from 'react';
import { Line } from 'react-chartjs-2';

const Graph = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Data Set 1',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
      },
      {
        label: 'Data Set 2',
        data: [5, 10, 2, 8, 6, 12],
        fill: false,
        borderColor: 'rgba(255,0,0,1)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return <Line data={data} options={options} />;
};

export default Graph;
