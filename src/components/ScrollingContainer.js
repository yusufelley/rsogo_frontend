import React from "react";
import HomeCard from "./HomeCard/HomeCard";
import { useState } from "react";

export const ScrollingContainer = ({cardData}) => {
  const [mon, setMon] = useState(cardData.filter((card) => card.day == "mon"))
  const [tue, setTue] = useState(cardData.filter((card) => card.day == "tue"))
  const [wed, setWed] = useState(cardData.filter((card) => card.day == "wed"))
  const [thur, setThur] = useState(cardData.filter((card) => card.day == "thur"))
  const [fri, setFri] = useState(cardData.filter((card) => card.day == "fri"))
  const [sat, setSat] = useState(cardData.filter((card) => card.day == "Sat"))
  const [sun, setSun] = useState(cardData.filter((card) => card.day == "sun"))

  console.log(mon)

  return (
    <div>
      <div
        style={{
          backgroundColor: "#e7e7e7",
          width: "85vw", // remove
          height: "100vh", // remove
          padding: "12px"
        }}
        className="overflow-scroll"
      >
        <div class="mon" style={{marginBottom: "80px"}}>Mon
          {mon.map((card) => <div style={{marginBottom: "20px"}}><HomeCard bg={card.bg} txtColor={card.txtColor} img={card.img} text={card.text} time={card.time}/></div>)}
        </div>
        <div class="tue" style={{marginBottom: "80px"}}>Tue
          {tue.map((card) => <div style={{marginBottom: "20px"}}><HomeCard bg={card.bg} txtColor={card.txtColor} img={card.img} text={card.text} time={card.time}/></div>)}
        </div>
        <div class="monday" style={{marginBottom: "80px"}}>Wed
          {wed.map((card) => <div style={{marginBottom: "20px"}}><HomeCard bg={card.bg} txtColor={card.txtColor} img={card.img} text={card.text} time={card.time}/></div>)}
        </div>
        <div class="monday" style={{marginBottom: "80px"}}>Thur
          {thur.map((card) => <div style={{marginBottom: "20px"}}><HomeCard bg={card.bg} txtColor={card.txtColor} img={card.img} text={card.text} time={card.time}/></div>)}
        </div>
        <div class="monday" style={{marginBottom: "80px"}}>Fri
          {fri.map((card) => <div style={{marginBottom: "20px"}}><HomeCard bg={card.bg} txtColor={card.txtColor} img={card.img} text={card.text} time={card.time}/></div>)}
        </div>
        <div class="monday" style={{marginBottom: "80px"}}>Sat
          {sat.map((card) => <div style={{marginBottom: "20px"}}><HomeCard bg={card.bg} txtColor={card.txtColor} img={card.img} text={card.text} time={card.time}/></div>)}
        </div>
        <div class="monday" style={{marginBottom: "80px"}}>Sun
          {sun.map((card) => <div style={{marginBottom: "20px"}}><HomeCard bg={card.bg} txtColor={card.txtColor} img={card.img} text={card.text} time={card.time}/></div>)}
        </div>
      </div>
    </div>
  );
};
