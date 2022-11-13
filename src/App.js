import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeCard from "./components/HomeCard/HomeCard";
import msa from "./assets/msa.png";
import msaFlyer from "./assets/flyer.jpg";
import testFlyer from "./assets/flyer2.png";
import EventCard from "./components/EventCard";
import { Home } from "./screens/Home";
import SideBar from "./components/SideBar";
import React, { useState } from "react";
import OneRSO from "./screens/OneRSO";

function App() {
  const [showHome, setShowHome] = useState(false);
  return (
    <div className="App" style={{ backgroundColor: "blue", flex: 1 }}>
      {/* <EventCard img = {testFlyer}></EventCard> */}
      {/* <SideBar /> */}
      {/* <Home /> */}
      {showHome ? <Home /> : <OneRSO />}
    </div>
  );
}

export default App;
