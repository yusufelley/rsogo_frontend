import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  EventContainer from './components/EventContainer'
import { Home } from './screens/Home';

function App() {
  return (
    <div className="App">
      <div> <Home/> </div>
      <EventContainer/>
    </div>
  );
}

export default App;
