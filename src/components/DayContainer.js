import React from "react";
import HomeCard from "./HomeCard/HomeCard";

export const DayContainer = ({ day, cardData, id }) => {
  const filteredCards = cardData.filter(
    (card) => card.date.isoWeekday() === id
  );
  if (filteredCards.length === 0) {
    return;
  }
  return (
    <div class="day" style={{ marginBottom: "80px" }}>
      {day}
      {filteredCards.map((card) => (
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
    </div>
  );
};
