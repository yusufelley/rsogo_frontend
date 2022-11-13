import React from "react";
import { BsCalendarPlus } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useState } from "react";
import {GrAnnounce} from "react-icons/gr"

const ICON_SIZE = 20;

function AnnouncementCard(props) {
  const [titleText, setTitleText] = useState(props.title);
  const [time, setTime] = useState(props.time);
  const [date, setDate] = useState(props.date);
  const [bodyText, setBodyText] = useState(props.body)
  
  return (
    <div style={containerStyle} className="shadow">
      <div style={titleFlex}>
        <GrAnnounce size={ICON_SIZE} />
        <div style={title}>{titleText}</div>
      </div>
      <div style={keyDetails}>
        <div style={iconContainer}>
          <AiOutlineClockCircle size={ICON_SIZE} />
          <p style={iconText}>{time}</p>
        </div>
        <div style={iconContainer}>
          <FaRegCalendarAlt size={ICON_SIZE} />
          <p style={iconText}>{date}</p>
        </div>
      </div>
      <div style={bodyTxt}>
        {bodyText}
      </div>
    </div>
  );
}

const containerStyle = {
    display: "flex",
    flexDirection: "column",
    width: "70vw",
    height: "30vh",
    background: "White",
    borderRadius: 15,
    position: "relative",
    left: "5vw",
    top: "5vh",
    padding: "10px",
    margin: "auto"
};

const title = {
    fontSize: 15,
    marginLeft: 5,
    marginBottom: 5,
}; 

const keyDetails = {
    display: "flex",
    fontSize: 10,
};

const iconContainer = {
    display: "flex",
    fontSize: 10,
    marginLeft: 4,
};

const iconText = {
    fontSize: 12,
    padding: 0,
    margin: 0,
};

const bodyTxt = {
  marginTop: 10
}

const titleFlex = {
  display: "flex"
}

export default AnnouncementCard;