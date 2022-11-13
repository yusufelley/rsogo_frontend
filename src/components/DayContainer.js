import { ca } from "date-fns/locale";
import moment from "moment";
import React from "react";
import HomeCard from "./HomeCard/HomeCard";

export const DayContainer = ({ day, cardData, id }) => {
  const filteredCards = cardData.filter((card) => {
    return (
      card.date.isSameOrAfter(moment()) &&
      card.date.isSameOrBefore(moment().add(7, "days")) &&
      card.date.isoWeekday() === id
    );
  });
  if (filteredCards.length === 0) {
    return;
  }
  return (
    <div class="day" style={{ marginBottom: "80px" }}>
      {`${day} - ${moment().add(id, "days").format("MM/DD/YYYY")}`}
      {filteredCards.map((card) => (
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
