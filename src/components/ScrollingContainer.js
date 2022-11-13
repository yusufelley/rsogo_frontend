import React from "react";
import EventCard from "./EventCard";
import HomeCard from "./HomeCard/HomeCard";
import { useState } from "react";
import FlippableCard from "./FlippableCard";

export const ScrollingContainer = ({ cardData, showHome }) => {
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
            {cardData.filter((card) => card.day === "mon").length > 0 ? (
            <div class="day" style={{ marginBottom: "80px" }}>
              Mon
              {cardData
                .filter((card) => card.day === "mon")
                .map((card) => (
                  <div style={{ marginBottom: "20px" }}>
                    <HomeCard
                      bg={card.bg}
                      txtColor={card.txtColor}
                      img={card.img}
                      text={card.text}
                      time={card.time}
                    />
                  </div>
                ))}
            </div>) : (null) }
            {cardData.filter((card) => card.day === "tue").length > 0 ? (
            <div class="day" style={{ marginBottom: "80px" }}>
              Tue
              {cardData
                .filter((card) => card.day === "tue")
                .map((card) => (
                  <div style={{ marginBottom: "20px" }}>
                    <HomeCard
                      bg={card.bg}
                      txtColor={card.txtColor}
                      img={card.image}
                      text={card.text}
                      time={card.time}
                    />
                  </div>
                ))}
            </div>) : (null) }
            {cardData.filter((card) => card.day === "wed").length > 0 ? (
            <div class="day" style={{ marginBottom: "80px" }}>
              Wed
              {cardData
                .filter((card) => card.day === "wed")
                .map((card) => (
                  <div style={{ marginBottom: "20px" }}>
                    <HomeCard
                      bg={card.bg}
                      txtColor={card.txtColor}
                      img={card.img}
                      text={card.text}
                      time={card.time}
                    />
                  </div>
                ))}
            </div>) : (null) }
            {cardData.filter((card) => card.day === "thur").length > 0 ? (
            <div class="day" style={{ marginBottom: "80px" }}>
              Thur
              {cardData
                .filter((card) => card.day === "thur")
                .map((card) => (
                  <div style={{ marginBottom: "20px" }}>
                    <HomeCard
                      bg={card.bg}
                      txtColor={card.txtColor}
                      img={card.img}
                      text={card.text}
                      time={card.time}
                    />
                  </div>
                ))}
            </div>) : (null) }
            {cardData.filter((card) => card.day === "fri").length > 0 ? (
            <div class="day" style={{ marginBottom: "80px" }}>
              Fri
              {cardData
                .filter((card) => card.day === "fri")
                .map((card) => (
                  <div style={{ marginBottom: "20px" }}>
                    <HomeCard
                      bg={card.bg}
                      txtColor={card.txtColor}
                      img={card.img}
                      text={card.text}
                      time={card.time}
                    />
                  </div>
                ))}
            </div>) : (null) }
            {cardData.filter((card) => card.day === "sat").length > 0 ? (
            <div class="day" style={{ marginBottom: "80px" }}>
              Sat
              {cardData
                .filter((card) => card.day === "sat")
                .map((card) => (
                  <div style={{ marginBottom: "20px" }}>
                    <HomeCard
                      bg={card.bg}
                      txtColor={card.txtColor}
                      img={card.img}
                      text={card.text}
                      time={card.time}
                    />
                  </div>
                ))}
            </div>) : (null) }
            {cardData.filter((card) => card.day === "sun").length > 0 ? (
            <div class="day" style={{ marginBottom: "80px" }}>
              Sun
              {cardData
                .filter((card) => card.day === "sun")
                .map((card) => (
                  <div style={{ marginBottom: "20px" }}>
                    <HomeCard
                      bg={card.bg}
                      txtColor={card.txtColor}
                      img={card.img}
                      text={card.text}
                      time={card.time}
                    />
                  </div>
                ))}
            </div>) : (null) }
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

      {/*cardData.map((card) => (
          <div style={{ marginBottom: "20px" }}>
            {showHome ? (
              <HomeCard
                bg={card.bg}
                txtColor={card.txtColor}
                img={card.image}
                text={card.text}
                time={card.time}
              />
            ) : (
              <FlippableCard
                img={card.image}
                title={card.text}
                time={card.time}
                date={card.date}
                location={card.location}
              />
            )}
          </div>
            ))}*/}
    </div>
  );
};
