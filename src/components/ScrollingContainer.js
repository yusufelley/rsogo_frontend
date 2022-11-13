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
          backgroundColor: "#E9E3E3",
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
                img={card.image}
                text={card.text}
                time={card.time}
              />
            ) : (
              <EventCard
                img={card.image}
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
