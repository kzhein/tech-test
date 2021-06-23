import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const BarChart = ({ personAdded }) => {
  const [response, setResponse] = useState(null);

  const fetchData = async () => {
    const res = await axios.get('http://localhost:8080/bar');
    setResponse(res.data);
  };

  useEffect(() => {
    fetchData();
  }, [personAdded]);

  const data = {
    labels: [
      'Young adults (0 to 35)',
      'Adults (36 to 50)',
      'Seniors (51 and above)',
    ],
    datasets: [
      {
        label: '# of people',
        data: [
          response?.youngAdults?.length,
          response?.adults?.length,
          response?.seniors?.length,
        ],
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
