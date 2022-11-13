import React from "react";
import EventCard from "./EventCard";
import HomeCard from "./HomeCard/HomeCard";
import { useState } from "react";
import FlippableCard from "./FlippableCard";
import { DayContainer } from "./DayContainer";

export const ScrollingContainer = ({ cardData, showHome }) => {
  const DAYS = [
    { name: "Monday", id: 1 },
    { name: "Tuesday", id: 2 },
    { name: "Wednesday", id: 3 },
    { name: "Thursday", id: 4 },
    { name: "Friday", id: 5 },
    { name: "Saturday", id: 6 },
    { name: "Sunday", id: 7 },
  ];
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
            {DAYS.map((day) => (
              <DayContainer day={day.name} id={day.id} cardData={cardData} />
            ))}
          </div>
        ) : (
          cardData.map((card) => (
            <div style={{ marginBottom: "20px" }}>
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
