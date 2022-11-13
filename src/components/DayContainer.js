import { ca } from "date-fns/locale";
import moment from "moment";
import React from "react";
import HomeCard from "./HomeCard/HomeCard";

export const DayContainer = ({ day, cardData, id }) => {
  if (cardData.length === 0) {
    return;
  }
  return (
    <div class="day" style={{ marginBottom: "0px" }}>
      {`${day}`}
      {cardData.map((card) => (
        <div style={{ marginBottom: "20px" }}>
          <HomeCard
            bg={card.bg}
            txtColor={card.txtColor}
            img={card.img}
            text={card.text}
            time={card.date.format("hh:mm A")}
          />
        </div>
      ))}
    </div>
  );
};