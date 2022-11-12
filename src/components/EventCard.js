import React from "react";
import { RiQuestionnaireLine } from "react-icons/ri";
import { BsCalendarPlus } from "react-icons/bs";
import Button from "react-bootstrap/Button";

import { AiOutlineClockCircle } from "react-icons/ai";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";

const ICON_SIZE = 20;

function EventCard(props) {
  const img = props.img
  const titleText = props.title
  const time = props.time
  const date = props.date
  const location = props.location

  return ( 
    <div style={containerStyle} className="shadow">
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
        <MdOutlineLocationOn style={icon} size={ICON_SIZE + 4} />
        <p style={iconText}>Campus Center</p>
      </div>
      <img src={img} style={image} alt="msaFlyer"></img>
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
  );
}

const containerStyle = {
  display:"flex",
  flexDirection: "column",
  width: "70vw",
  height: "52vh",
  background: "White",
  borderRadius: 15,
  position: "relative",
  left: "5vw",
  top: "5vh",
  padding: "10px"
};

const buttonStyle = {
  color: "White",
  fontWeight: "bold",
  borderRadius: "18px 3px 18px 18px",
  marginLeft: "10px",
};

// export const icons = ({text,icon}) => {
//   return (
//     <div>
//       <div style={iconContainer}>
//         <div>{icon}</div>
//         <p style={iconText}>{text}</p>
//       </div>
//     </div>
//   )
// }

const title = {
  fontSize: 15,
  marginLeft: 5,
  marginBottom: 5
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
  margin: 0
};
const icon = {
  marginLeft: 0
};
const bottomBar = {
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
};
const image = {
  height:"36vh", 
  width:"64vw", 
  alignSelf:"center", 
  marginBottom: 5, 
  marginTop: 5
}


export default EventCard;
