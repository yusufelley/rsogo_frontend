import React from "react";
import EventCard from "./EventCard";
import HomeCard from "./HomeCard/HomeCard";
import { useState } from "react";

export const ScrollingContainer = ({ cardData, showHome }) => {
  console.log(cardData);
  return (
    <div>
      <div
        style={{
          backgroundColor: "#e7e7e7",
          width: "85vw", // remove
          height: "100vh", // remove
          padding: "12px",
        }}
        className="overflow-scroll"
      >
        {cardData.map((card) => (
          <div style={{ marginBottom: "80px" }}>
            {showHome ? (
              <HomeCard
                bg={card.bg}
                txtColor={card.txtColor}
                img={card.img}
                text={card.text}
                time={card.time}
              />
            ) : (
              <EventCard
                img={card.img}
                title={card.text}
                time={card.time}
                date={card.date}
                location={card.location}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
