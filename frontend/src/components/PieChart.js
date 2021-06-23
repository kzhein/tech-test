import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';

const PieChart = ({ personAdded }) => {
  const [response, setResponse] = useState(null);

  const fetchData = async () => {
    const res = await axios.get('http://localhost:8080/pie');
    setResponse(res.data);
  };

  useEffect(() => {
    fetchData();
  }, [personAdded]);

  const data = {
    labels: ['Male', 'Female'],
    datasets: [
      {
        data: [response?.male?.length, response?.female?.length],
        backgroundColor: ['blue', 'pink'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
