import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeCard from './components/HomeCard/HomeCard'
import msa from './assets/msa.png'

function App() {
  return (
    <HomeCard bg="danger" textColor="light" img={msa} text="MSA Welcome Back"/>
  );
}

export default App;
