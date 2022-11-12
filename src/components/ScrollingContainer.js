import React from "react";
import HomeCard from "./HomeCard/HomeCard";

export const ScrollingContainer = ({cardData}) => {
  console.log(typeof cardData)
  return (
    <div>
      <div
        style={{
          backgroundColor: "#d1d5db",
          width: "80vw", // remove
          height: "95vh", // remove
          marginTop: "5vh", // remove
          marginLeft: "20vw", // remove
        }}
        className="overflow-scroll"
      >
        {cardData.map((card) => <HomeCard bg={card.bg} txtColor={card.txtColor} img={card.img} text={card.text} time={card.time}/>)}
      </div>
    </div>
  );
};
