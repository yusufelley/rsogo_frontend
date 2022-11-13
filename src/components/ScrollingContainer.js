import React from "react";
import HomeCard from "./HomeCard/HomeCard";

export const ScrollingContainer = ({cardData}) => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#e7e7e7",
          width: "85vw", // remove
          height: "100vh", // remove
        }}
        className="overflow-scroll"
      >
        {cardData.map((card) => <div style={{marginBottom: "80px"}}><HomeCard bg={card.bg} txtColor={card.txtColor} img={card.img} text={card.text} time={card.time}/></div>)}
      </div>
    </div>
  );
};
