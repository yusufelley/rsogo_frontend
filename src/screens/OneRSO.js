import React from "react";
import EventCard from "../components/EventCard";
import testFlyer from "../assets/flyer2.png";
import { ScrollingContainer } from "../components/ScrollingContainer";
import "./OneRSO.css";
import About from "../components/About/About"

function OneRSO() {
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
    <div>
      <div className="one-RSO-header">
        <div className="club-name-header">MSA</div>
        <About rsoName="MSA" body="hdskdjhwjasdljw s ldjwoiajdslkwja  daskldjdwj" />
      </div>
      <ScrollingContainer cardData={eventCards} />
    </div>
  );
}

export default OneRSO;
