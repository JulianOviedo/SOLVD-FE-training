import './App.css';
import Head from './Head';
import TrafficLight from './TrafficLight'

const trafficStates = {
  red: {
    duration: 4000,
    backgroundColor: '#DF4040',
    next: 'yellow'
  },
  yellow: {
    duration: 500,
    backgroundColor: '#E9EC6A',
    next: 'green'
  },
  green: {
    duration: 3000,
    backgroundColor: '#04CA00',
    next: 'red'
  }
};

function App() {
  return (
    <div className="wrapper">

      <div >
        <Head />
        <TrafficLight trafficStates={trafficStates} />
      </div>

    </div>
  );
}

export default App;
