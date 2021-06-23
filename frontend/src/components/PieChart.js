import React from 'react';
import { Pie } from 'react-chartjs-2';
import people from '../people.json';

const male = people.filter(person => person.gender === 'M').length;
const female = people.filter(person => person.gender === 'F').length;

const data = {
  labels: ['Male', 'Female'],
  datasets: [
    {
      data: [male, female],
      backgroundColor: ['blue', 'pink'],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
      borderWidth: 1,
    },
  ],
};

const PieChart = () => {
  return (
    <div>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
