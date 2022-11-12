import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeCard from './components/HomeCard/HomeCard'
import msa from './assets/msa.png'
import  EventCard from './components/EventCard'
import { Home } from './screens/Home';
import EventContainer from './components/EventCard';

function App() {
  return (
    <div className="App">
      <HomeCard bg="danger" textColor="white" img={msa} text="MSA Welcome Back" time="10:00pm"></HomeCard>
    </div>
  );
}

export default App;
