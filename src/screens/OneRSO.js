import React, { useState, useEffect } from "react";
import EventCard from "../components/EventCard";
import testFlyer from "../assets/flyer2.png";
import iftarFlyer from "../assets/happy_iftar.png";
import seniorFlyer from "../assets/Senior_Weekend_2022.png";
import wbFlyer from "../assets/spring_welcome_back.png";
import gameFlyer from "../assets/games.png";
import { ScrollingContainer } from "../components/ScrollingContainer";
import "./OneRSO.css";
import About from "../components/About/About";
import moment from "moment";
import axios from "axios";

function OneRSO({ isUpdate }) {
  const [serverResponse, setServerResponse] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(
    () => async () =>
      await axios
        .get("http://localhost:3001/event/msa")
        .then((res) => setServerResponse(res.data.data))
        .finally(() => {
          setLoading(false);
        }),
    [isUpdate]
  );

  useEffect(() => console.log("theres an update"), [isUpdate]);
  console.log(isUpdate);

  const eventCards = [
    {
      image: gameFlyer,
      title: "Game Night",
      date: moment({ year: 2022, month: 5, day: 20, hour: 4, minute: 45 }),
      location: "Student Union",
    },
    {
      image: iftarFlyer,
      title: "Iftar",
      date: moment({ year: 2022, month: 7, day: 13, hour: 8, minute: 10 }),
      location: "Campus Center Auditorium",
    },
    {
      image: seniorFlyer,
      title: "Senior Weekend",
      date: moment({ year: 2022, month: 8, day: 17, hour: 15, minute: 10 }),
      location: "Boston",
    },
    {
      image: wbFlyer,
      title: "Welcome Back",
      date: moment({ year: 2022, month: 8, day: 15, hour: 15, minute: 30 }),
      location: "Campus Center",
    },
    {
      image: testFlyer,
      title: "Test Title",
      date: moment({ year: 2022, month: 10, day: 17, hour: 15, minute: 10 }),
      location: "ILC",
    },
  ];

  if (loading) {
    return <div> loading... </div>;
  }
  console.log("res: ", serverResponse);
  return (
    <div>
      <div className="one-RSO-header">
        <div className="club-name-header" style={{ fontFamily: "monospace" }}>
          MSA
        </div>
        <About rsoName="MSA" body="The MSA exists to facilitate the practice of Islam on campus. By bringing Muslims together and providing important services, the MSA creates an Islamic atmosphere allowing students to continue their spiritual journey while also successfully completing their studies." />
      </div>
      <ScrollingContainer cardData={serverResponse} />
    </div>
  );
}

export default OneRSO;
