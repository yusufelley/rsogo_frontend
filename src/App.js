import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeCard from "./components/HomeCard/HomeCard";

import msa from "./assets/msa.png";
import smash from "./assets/umass-smashbros.png";
import hockey from "./assets/umass-hockey.jpg";
import acm from "./assets/umass-acm.png";
import archery from "./assets/umass-archery.jpg";

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
  const [showHome, setShowHome] = useState(true);
  const [showCreateEvent, setShowCreateEvent] = useState(false);
  const [currCard, setCard] = useState(null);

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
      <SideBar
        rsoData={RSOs}
        showHome={showHome}
        setShowHome={setShowHome}
        currCard={currCard}
        setCard={setCard}
        showCreateEvent={showCreateEvent}
        setShowCreateEvent={setShowCreateEvent}
        toggleCreateEvent={toggleCreateEvent}
      />
      {showHome ? <Home /> : <OneRSO currCard={currCard} setCard={setCard} />}
    </div>
  );
}

export default App;
