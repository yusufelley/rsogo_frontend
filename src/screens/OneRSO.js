import React from "react";
import EventCard from "../components/EventCard";
import testFlyer from "../assets/flyer2.png";
import { ScrollingContainer } from "../components/ScrollingContainer";
import "./OneRSO.css";

function OneRSO(props) {
  const currCard = props.currCard;
  const setCard = props.setCard;

  const eventCards = [
    {
      image: testFlyer,
      title: "Test Title",
      time: "1:00 PM",
      date: "12/1/22",
      location: "ILC",
    },
    {
      image: testFlyer,
      title: "Test Title",
      time: "1:00 PM",
      date: "12/1/22",
      location: "ILC",
    },
    {
      image: testFlyer,
      title: "Test Title",
      time: "1:00 PM",
      date: "12/1/22",
      location: "ILC",
    },
    {
      image: testFlyer,
      title: "Test Title",
      time: "1:00 PM",
      date: "12/1/22",
      location: "ILC",
    },
    {
      image: testFlyer,
      title: "Test Title",
      time: "1:00 PM",
      date: "12/1/22",
      location: "ILC",
    },
    {
      image: testFlyer,
      title: "Test Title",
      time: "1:00 PM",
      date: "12/1/22",
      location: "ILC"
    },
    {
      image: testFlyer,
      title: "Test Title",
      time: "1:00 PM",
      date: "12/1/22",
      location: "ILC",
    },
    {
      image: testFlyer,
      title: "Test Title",
      time: "1:00 PM",
      date: "12/1/22",
      location: "ILC",
    },

  ];
  return (
    <div className="main-container">
      <ScrollingContainer cardData={eventCards} />
    </div>
  );
}

export default OneRSO;
