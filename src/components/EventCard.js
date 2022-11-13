import React, { useState } from "react";
import { RiQuestionnaireLine } from "react-icons/ri";
import { BsCalendarPlus } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import "./EventCard.css";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import "./FlipTransition.css";

const ICON_SIZE = 20;

function EventCard({
  img,
  titleText,
  time,
  date,
  locaiton,
  onClick,
  handleClick,
}) {
  const [imageState, setImageState] = useState(img);

  return (
    <div className="event-card" onClick={onClick}>
      <div className="card-back" onClick={() => handleClick()}>
        <div style={title}>Event Details:</div>
        <div></div>
      </div>
      <div className="card-front">
        <div style={title}>Welcome Back!</div>
        <div style={keyDetails}>
          <div style={iconContainer}>
            <AiOutlineClockCircle size={ICON_SIZE} />
            <p style={iconText}>7:30PM</p>
          </div>
          <div style={iconContainer}>
            <FaRegCalendarAlt size={ICON_SIZE} />
            <p style={iconText}>10/22/2022</p>
          </div>
        </div>
        <div style={iconContainer}>
          <MdOutlineLocationOn style={icon} size={ICON_SIZE + 5} />
          <p style={iconText}>Campus Center</p>
        </div>
        <img
          onClick={() => {
            handleClick();
          }}
          src={imageState}
          style={image}
          alt="Flyer"
        ></img>
        <div align="center" style={bottomBar}>
          <RiQuestionnaireLine size={"30px"}></RiQuestionnaireLine>
          <div>
            <BsCalendarPlus size={"25px"}></BsCalendarPlus>
            <Button className="btn-dark btn-sm" style={buttonStyle}>
              RSVP
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

const buttonStyle = {
  zIndex: 3,
  color: "White",
  fontWeight: "900",
  borderRadius: "18px 3px 18px 18px",
  marginLeft: "10px",
  fontFamily: "Nunito Sans",
};

const title = {
  fontFamily: "Raleway",
  fontWeight: "600",
  fontSize: 18,
  marginLeft: 5,
  marginBottom: 5,
};

const keyDetails = {
  display: "flex",
  fontSize: 10,
  fontFamily: "Montserrat",
  fontWeight: 600,
};
const iconContainer = {
  display: "flex",
  fontSize: 10,
  marginLeft: 4,
};
const iconText = {
  fontSize: 14,
  padding: 0,
  marginTop: 0,
  marginLeft: 3,
  marginRight: 10,
  marginBottom: 0,
  fontFamily: "Montserrat",
  fontWeight: 600,
};
const icon = {
  marginLeft: 0,
  padding: 0,
  position: "relative",
  right: 2,
};
const bottomBar = {
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
};
const image = {
  height: "36vh",
  width: "64vw",
  marginBottom: 5,
  marginTop: 5,
  borderRadius: "0px 20px 0px 20px",
};

export default EventCard;
