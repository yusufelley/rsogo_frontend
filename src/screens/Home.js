import React, { useState } from "react";
import { Row } from "react-bootstrap";
import { ScrollingContainer } from "../components/ScrollingContainer";
import SideBar from "../components/SideBar/SideBar";
import msa from "../assets/msa.png";
import "./Home.css";
import moment from "moment";

export const Home = (props) => {
  const cards = [
    {
      bg: "danger",
      txtColor: "white",
      img: msa,
      text: "Yesterday",
      date: moment({ year: 2022, month: 10, day: 12, hour: 18, minute: 0 }),
    },
    {
      bg: "danger",
      txtColor: "white",
      img: msa,
      text: "Today",
      date: moment({ year: 2022, month: 10, day: 13, hour: 15, minute: 10 }),
    },
    {
      bg: "danger",
      txtColor: "white",
      img: msa,
      text: "Tomorrow",
      date: moment({ year: 2022, month: 10, day: 14, hour: 12, minute: 10 }),
    },
    {
      bg: "danger",
      txtColor: "white",
      img: msa,
      text: "Tuesday",
      date: moment({ year: 2022, month: 10, day: 15, hour: 1, minute: 10 }),
    },
    {
      bg: "danger",
      txtColor: "white",
      img: msa,
      text: "Wednesday",
      date: moment({ year: 2022, month: 10, day: 16, hour: 15, minute: 10 }),
    },
    {
      bg: "danger",
      txtColor: "white",
      img: msa,
      text: "Thursday",
      date: moment({ year: 2022, month: 10, day: 17, hour: 15, minute: 10 }),
    },
    {
      bg: "danger",
      txtColor: "white",
      img: msa,
      text: "Friday",
      date: moment({ year: 2022, month: 10, day: 18, hour: 15, minute: 0 }),
    },
    {
      bg: "danger",
      txtColor: "white",
      img: msa,
      text: "Saturday",
      date: moment({ year: 2022, month: 10, day: 19, hour: 15, minute: 0 }),
    },
    {
      bg: "danger",
      txtColor: "white",
      img: msa,
      text: "Sunday",
      date: moment({ year: 2022, month: 10, day: 20, hour: 15, minute: 0 }),
    },
    {
      bg: "danger",
      txtColor: "white",
      img: msa,
      text: "Monday Next week ",
      date: moment({ year: 2022, month: 10, day: 21, hour: 15, minute: 0 }),
    },
  ];
  return (
    <div
      className="main-container"
      style={{ display: "inline-block", backgroundColor: "yellow" }}
    >
      <ScrollingContainer showHome cardData={cards}></ScrollingContainer>
    </div>
  );
};
