import { useState } from 'react';
import './App.css';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import InputForm from './components/InputForm';

function App() {
  let [personAdded, setPersonAdded] = useState(1);

  return (
    <div className='App'>
      <h1>Tech Test - Frontend</h1>

      <div className='container'>
        <h2>Pie Chart - the ratio of M and F according to gender</h2>
        <PieChart personAdded={personAdded} />
      </div>

      <hr />

      <div className='container'>
        <h2>Bar Chart - the number of people according to age group</h2>
        <BarChart personAdded={personAdded} />
      </div>

      <hr />

      <div className='container'>
        <h2>Add New Person</h2>
        <InputForm setPersonAdded={setPersonAdded} />
      </div>
    </div>
  );
}

export default App;
