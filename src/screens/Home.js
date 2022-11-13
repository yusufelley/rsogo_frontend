import React, { useState } from "react";
import { Row } from "react-bootstrap";
import { ScrollingContainer } from "../components/ScrollingContainer";
import SideBar from "../components/SideBar/SideBar";
import msa from "../assets/msa.png";
import logo from "../assets/RSOlogo.png";
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
      text: "Game Night",
      date: moment({ year: 2022, month: 10, day: 13, hour: 15, minute: 10 }),
    },
    {
      bg: "danger",
      txtColor: "white",
      img: msa,
      text: "Iftar",
      date: moment({ year: 2022, month: 10, day: 14, hour: 12, minute: 10 }),
    },
    {
      bg: "danger",
      txtColor: "white",
      img: msa,
      text: "Senior Weekend",
      date: moment({ year: 2022, month: 10, day: 14, hour: 1, minute: 10 }),
    },
    {
      bg: "danger",
      txtColor: "white",
      img: msa,
      text: "Welcome Back",
      date: moment({ year: 2022, month: 10, day: 16, hour: 15, minute: 10 }),
    },
    {
      bg: "danger",
      txtColor: "white",
      img: msa,
      text: "Movie Night",
      date: moment({ year: 2022, month: 10, day: 17, hour: 15, minute: 10 }),
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
      text: "Paint Balling",
      date: moment({ year: 2022, month: 10, day: 18, hour: 15, minute: 0 }),
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
      <div
        className="App"
        style={{ backgroundColor: "#c0c6d0", display: "flex", flexDirection:"column" }}
      >
      <div className="club-name-header" style={{ fontFamily: "monospace" }}>
        <img src={logo} alt="logo" style={{width:"70vw", height:"70px", position:"relative", right: 20, top: 5}}/>
      </div>
      <ScrollingContainer showHome cardData={cards}></ScrollingContainer>
      </div>
    </div>
  );
};
