import React, { useState } from "react";
import { Row } from "react-bootstrap";
import { ScrollingContainer } from "../components/ScrollingContainer";
import SideBar from "../components/SideBar/SideBar";
import msa from "../assets/msa.png";
import smash from "../assets/umass-smashbros.png";
import hockey from "../assets/umass-hockey.jpg";
import acm from "../assets/umass-acm.png";
import archery from "../assets/umass-archery.jpg";

import "./Home.css";
import moment from "moment";
import { WHITE_COLOR } from "../configs/colors";

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
      text: "Yesterday",
      date: moment({ year: 2022, month: 10, day: 12, hour: 18, minute: 0 }),
    },
    {
      bg: "danger",
      txtColor: "white",
      img: msa,
      text: "Welcome Back!",
      date: moment({ year: 2022, month: 10, day: 13, hour: 15, minute: 10 }),
    },
    {
      bg: "success",
      txtColor: "white",
      img: smash,
      text: "Charity Tournament!",
      date: moment({ year: 2022, month: 10, day: 14, hour: 15, minute: 10 }),
    },
    {
      bg: "danger",
      txtColor: "white",
      img: msa,
      text: "Sunrise Hike",
      date: moment({ year: 2022, month: 10, day: 14, hour: 12, minute: 10 }),
    },
    {
      bg: "danger",
      txtColor: "white",
      img: msa,
      text: "Jelly Fishing",
      date: moment({ year: 2022, month: 10, day: 14, hour: 1, minute: 10 }),
    },
    {
      bg: "warning",
      txtColor: "black",
      img: acm,
      text: "Advanced ML!",
      date: moment({ year: 2022, month: 10, day: 14, hour: 16, minute: 30 }),
    },
    {
      bg: "danger",
      txtColor: "white",
      img: msa,
      text: "Apple Picking",
      date: moment({ year: 2022, month: 10, day: 16, hour: 15, minute: 10 }),
    },
    {
      bg: "info",
      txtColor: "white",
      img: archery,
      text: "Shooting practice",
      date: moment({ year: 2022, month: 10, day: 16, hour: 17, minute: 20 }),
    },
    {
      bg: "danger",
      txtColor: "white",
      img: msa,
      text: "Go Karting",
      date: moment({ year: 2022, month: 10, day: 17, hour: 15, minute: 0 }),
    },
    {
      bg: "danger",
      txtColor: "white",
      img: msa,
      text: "Movie Night",
      date: moment({ year: 2022, month: 10, day: 17, hour: 16, minute: 10 }),
    },
    {
      bg: "warning",
      txtColor: "white",
      img: acm,
      text: "Prod. Mgmt. intro!",
      date: moment({ year: 2022, month: 10, day: 17, hour: 19, minute: 20 }),
    },
    {
      bg: "danger",
      txtColor: "white",
      img: msa,
      text: "Paint Balling",
      date: moment({ year: 2022, month: 10, day: 19, hour: 15, minute: 0 }),
    },
    {
      bg: "danger",
      txtColor: "white",
      img: msa,
      text: "Six Flags",
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
      style={{ display: "inline-block", backgroundColor: WHITE_COLOR }}
    >
      <ScrollingContainer showHome cardData={cards}></ScrollingContainer>
    </div>
  );
};

