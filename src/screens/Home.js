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
      text: "MSA Welcome Back",
      date: moment({ year: 2022, month: 10, day: 13, hour: 15, minute: 10 }),
    },
    {
      bg: "danger",
      txtColor: "white",
      img: msa,
      text: "Dont Show",
      date: moment({ year: 2022, month: 10, day: 19, hour: 15, minute: 10 }),
    },
    {
      bg: "danger",
      txtColor: "white",
      img: msa,
      text: "MSA Welcome Back",
      date: moment({ year: 2022, month: 10, day: 18, hour: 12, minute: 10 }),
    },
    {
      bg: "danger",
      txtColor: "white",
      img: msa,
      text: "MSA Welcome Back",
      date: moment({ year: 2022, month: 10, day: 14, hour: 1, minute: 10 }),
    },
    {
      bg: "danger",
      txtColor: "white",
      img: msa,
      text: "MSA Welcome Back",
      date: moment({ year: 2022, month: 10, day: 14, hour: 15, minute: 10 }),
    },
    {
      bg: "danger",
      txtColor: "white",
      img: msa,
      text: "MSA Welcome Back",
      date: moment({ year: 2022, month: 10, day: 16, hour: 15, minute: 10 }),
    },
    {
      bg: "danger",
      txtColor: "white",
      img: msa,
      text: "MSA Welcome Back",
      date: moment({ year: 2022, month: 11, day: 14, hour: 15, minute: 10 }),
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
