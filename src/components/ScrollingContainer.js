import React from "react";
import EventCard from "./EventCard";
import HomeCard from "./HomeCard/HomeCard";
import { useState } from "react";
import FlippableCard from "./FlippableCard";
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
          backgroundColor: "#E9E3E3",
          width: "85vw", // remove
          height: "100vh", // remove
          padding: "12px",
        }}
        className="overflow-scroll"
      >
        {showHome ? (
          <div>
            {nextSevenDays.map((day) => (
              <DayContainer day={day.date} id={day.id} cardData={day.events} />
            ))}
          </div>
        ) : (
          cardData.map((card) => (
            <div style={{ marginBottom: "50px" }}>
              <FlippableCard
                img={card.image}
                title={card.text}
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
