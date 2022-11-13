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
import { CreateButton } from "./components/CreateButton";
import { CreateEventScreen } from "./screens/CreateEventScreen";

function App() {
  const [showHome, setShowHome] = useState(true);
  return (
    <div className="App" style={{ backgroundColor: "blue", display: "flex" }}>
      <CreateButton />
      <SideBar />
      {showHome ? <Home /> : <OneRSO />}
      <CreateEventScreen></CreateEventScreen>
    </div>
  );
}

export default App;
