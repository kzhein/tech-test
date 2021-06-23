import './App.css';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <h1>Pie Chart - the ratio of M and F according to gender</h1>
        <PieChart />
      </div>
      <hr />
      <div className='container'>
        <h1>Bar Chart - the number of people according to age group</h1>
        <BarChart />
      </div>
    </div>
  );
}

export default App;
