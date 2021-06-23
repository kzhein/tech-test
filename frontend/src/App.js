import { useState } from 'react';
import './App.css';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import InputForm from './components/InputForm';
import people from './people.json';

function App() {
  const [peopleState, setPeople] = useState(people);

  const addPerson = person => {
    setPeople([...peopleState, { id: peopleState.length + 1, ...person }]);
  };

  return (
    <div className='App'>
      <h1>Tech Test - Frontend</h1>

      <div className='container'>
        <h2>Pie Chart - the ratio of M and F according to gender</h2>
        <PieChart people={peopleState} />
      </div>

      <hr />

      <div className='container'>
        <h2>Bar Chart - the number of people according to age group</h2>
        <BarChart people={peopleState} />
      </div>

      <hr />

      <div className='container'>
        <h2>Add New Person</h2>
        <InputForm handleSubmit={addPerson} />
      </div>
    </div>
  );
}

export default App;
