import React from "react";
import EventCard from "../components/EventCard";
import testFlyer from "../assets/flyer2.png";
import { ScrollingContainer } from "../components/ScrollingContainer";
import "./OneRSO.css";
import About from "../components/About/About";
import moment from "moment";

function OneRSO(props) {
  const currCard = props.currCard;
  const setCard = props.setCard;

  const eventCards = [
    {
      image: testFlyer,
      title: "Test Title",
      date: moment({ year: 2022, month: 10, day: 17, hour: 15, minute: 10 }),
      location: "ILC",
    },
    {
      image: testFlyer,
      title: "Test Title",
      date: moment({ year: 2022, month: 10, day: 17, hour: 15, minute: 10 }),
      location: "ILC",
    },
    {
      image: testFlyer,
      title: "Test Title",
      date: moment({ year: 2022, month: 10, day: 17, hour: 15, minute: 10 }),
      location: "ILC",
    },
    {
      image: testFlyer,
      title: "Test Title",
      date: moment({ year: 2022, month: 10, day: 17, hour: 15, minute: 10 }),
      location: "ILC",
    },
    {
      image: testFlyer,
      title: "Test Title",
      date: moment({ year: 2022, month: 10, day: 17, hour: 15, minute: 10 }),
      location: "ILC",
    },
    {
      image: testFlyer,
      title: "Test Title",
      date: moment({ year: 2022, month: 10, day: 17, hour: 15, minute: 10 }),
      location: "ILC",
    },
    {
      image: testFlyer,
      title: "Test Title",
      date: moment({ year: 2022, month: 10, day: 17, hour: 15, minute: 10 }),
      location: "ILC",
    },
    {
      image: testFlyer,
      title: "Test Title",
      date: moment({ year: 2022, month: 10, day: 17, hour: 15, minute: 10 }),
      location: "ILC",
    },
  ];
  return (
    <div>
      <div className="one-RSO-header">
        <div className="club-name-header">MSA</div>
        <About
          rsoName="MSA"
          body="hdskdjhwjasdljw s ldjwoiajdslkwja  daskldjdwj"
        />
      </div>
      <ScrollingContainer cardData={eventCards} />
    </div>
  );
}

export default OneRSO;
