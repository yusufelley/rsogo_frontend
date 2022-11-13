import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeCard from "./components/HomeCard/HomeCard";
import msa from "./assets/msa.png";
import msaFlyer from "./assets/flyer.jpg";
import testFlyer from "./assets/flyer2.png";
import EventCard from "./components/EventCard";
import { Home } from "./screens/Home";
import SideBar from "./components/SideBar/SideBar";
import React, { useState } from "react";
import OneRSO from "./screens/OneRSO";
import { CreateButton } from "./components/CreateButton";

import { CreateEventScreen } from "./screens/CreateEventScreen";

function App() {
  const [showHome, setShowHome] = useState(false);
  const [showCreateEvent, setShowCreateEvent] = useState(false);

  const toggleCreateEvent = () => {
    setShowCreateEvent((prev) => !prev);
  };
  const RSOs = [
    { img: msa },
    { img: msa },
    { img: msa },
    { img: msa },
    { img: msa },
    { img: msa },
  ];
  console.log(showCreateEvent);
  return (
    <div className="App" style={{ backgroundColor: "blue", display: "flex" }}>
      {showCreateEvent ? (
        <CreateEventScreen toggleCreateEvent={toggleCreateEvent} />
      ) : (
        <>
          <CreateButton handleClick={toggleCreateEvent} />
        </>
      )}
      <SideBar rsoData={RSOs} />
      {showHome ? <Home /> : <OneRSO />}
    </div>
  );
}

export default App;
