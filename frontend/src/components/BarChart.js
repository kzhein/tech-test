import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ people }) => {
  const youngAdults = people.filter(
    person => person.age >= 0 && person.age <= 35
  ).length;

  const adults = people.filter(
    person => person.age >= 36 && person.age <= 50
  ).length;

  const seniors = people.filter(person => person.age >= 51).length;

  const data = {
    labels: [
      'Young adults (0 to 35)',
      'Adults (36 to 50)',
      'Seniors (51 and above)',
    ],
    datasets: [
      {
        label: '# of people',
        data: [youngAdults, adults, seniors],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
