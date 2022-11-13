import React from "react";
import EventCard from "./EventCard";
import HomeCard from "./HomeCard/HomeCard";
import { useState } from "react";
import FlippableCard from "./FlippableCard";
import { WHITE_COLOR } from "../configs/colors";
import { DayContainer } from "./DayContainer";
import moment from "moment";

export const ScrollingContainer = ({ cardData, showHome }) => {
  const nextSevenDays = [];
  for (let i = 0; i < 7; i++) {
    nextSevenDays.push({
      date: moment().add(i, "days").format("dddd, D MMMM YYYY"),
      events: [],
    });
  }

  console.log("init", nextSevenDays);

  nextSevenDays.forEach((day) => {
    cardData.forEach((card) => {
      if (card.date.isSame(day.date, "day")) {
        day.events.push(card);
      }
    });
  });

  return (
    <div>
      <div
        style={{
          backgroundColor: WHITE_COLOR,
          width: "85vw", // remove
          height: "100vh", // remove
          marginTop: 5,
          padding: "12px",
          borderTopRightRadius: "1rem",
          borderTopLeftRadius: "1rem",
        }}
        className="overflow-scroll"
      >
        {showHome ? (
          <div style={{marginTop:5,}}>
            {nextSevenDays.map((day) => (
              <DayContainer day={day.date} id={day.id} cardData={day.events} />
            ))}
          </div>
        ) : (
          cardData.map((card) => (
            <div style={{ marginBottom: "50px" }}>
              <FlippableCard
                img={card.image}
                title={card.title}
                time={card.time}
                date={card.date}
                location={card.location}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};
