import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeCard from './components/HomeCard/HomeCard'
import msa from './assets/msa.png'
import msaFlyer from './assets/flyer.jpg'
import testFlyer from './assets/flyer2.png'
import  EventCard from './components/EventCard'
import { Home } from './screens/Home';

function App() {
  return (
    <div className="App">
      <EventCard img={msaFlyer}/>
      {/* <HomeCard bg="danger" textColor="white" img={msa} text="MSA Welcome Back" time="10:00pm"></HomeCard> */}
      {/* <Home/> */}
    </div>
  );
}

export default App;
