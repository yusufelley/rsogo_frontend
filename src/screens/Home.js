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
      date: moment("11/14/2022"),
    },
    {
      bg: "danger",
      txtColor: "white",
      img: msa,
      text: "MSA Welcome Back",
      date: moment("11/16/2022"),
    },
    {
      bg: "danger",
      txtColor: "white",
      img: msa,
      text: "MSA Welcome Back",
      date: moment("11/16/2022"),
    },
    {
      bg: "danger",
      txtColor: "white",
      img: msa,
      text: "MSA Welcome Back",
      date: moment("11/18/2022"),
    },
    {
      bg: "danger",
      txtColor: "white",
      img: msa,
      text: "MSA Welcome Back",
      date: moment("11/19/2022"),
    },
    {
      bg: "danger",
      txtColor: "white",
      img: msa,
      text: "MSA Welcome Back",
      date: moment("11/14/2022"),
    },
    {
      bg: "danger",
      txtColor: "white",
      img: msa,
      text: "MSA Welcome Back",
      date: moment("11/14/2022"),
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
