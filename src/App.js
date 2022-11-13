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
import { WHITE_COLOR } from "./configs/colors";
import { CreateEventScreen } from "./screens/CreateEventScreen";

function App() {
  const [showHome, setShowHome] = useState(false);
  const [showCreateEvent, setShowCreateEvent] = useState(false);
  const [currCard, setCard] = useState(null);
  const [update, setUpdate] = useState(0);

  const triggerServerRequest = () => {
    console.log("trigger server");
    setUpdate((prev) => ++prev);
  };

  const toggleShowHome = () => {
    setShowHome((prev) => !prev);
  };
  const toggleCreateEvent = () => {
    setShowCreateEvent((prev) => !prev);
  };
  const RSOs = [
    { img: msa },
    { img: smash },
    { img: acm },
    { img: hockey },
    { img: archery },
  ];
  console.log(showCreateEvent);
  console.log(update);
  return (
    <div
      className="App"
      style={{ backgroundColor: "#c0c6d0", display: "flex" }}
    >
      {showCreateEvent ? (
        <CreateEventScreen
          handleUpdate={triggerServerRequest}
          toggleCreateEvent={toggleCreateEvent}
        />
      ) : (
        <>
          <CreateButton handleClick={toggleCreateEvent} />
        </>
      )}
      <SideBar
        rsoData={RSOs}
        showRSO={() => setShowHome(false)}
        showHome={showHome}
        setShowHome={setShowHome}
        toggleShowHome={toggleShowHome}
        currCard={currCard}
        setCard={setCard}
        showCreateEvent={showCreateEvent}
        setShowCreateEvent={setShowCreateEvent}
        toggleCreateEvent={toggleCreateEvent}
      />
      {showHome ? (
        <Home />
      ) : (
        <OneRSO isUpdate={update} currCard={currCard} setCard={setCard} />
      )}
    </div>
  );
}

export default App;
