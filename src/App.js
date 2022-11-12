import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeCard from './components/HomeCard/HomeCard'
import msa from './assets/msa.png'
import  EventCard from './components/EventCard'
import { Home } from './screens/Home';

function App() {
  return (
    <div className="App">
      <EventContainer/>
      <Home/>
    </div>
  );
}

export default App;
