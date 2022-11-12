import React from 'react'
import { RiQuestionnaireLine } from 'react-icons/ri'
import { BsCalendarPlus } from 'react-icons/bs'
import Button from 'react-bootstrap/Button'
 
import {AiOutlineClockCircle} from "react-icons/ai"
import {FaRegCalendarAlt} from "react-icons/fa"
import {MdOutlineLocationOn} from "react-icons/md"

const ICON_SIZE = 15


function EventCard(props) {
  return (
    <div style={containerStyle} className="shadow">
        <div style={title}>
          Welcome Back!
        </div>
        <div style={eventDetails}>
          <div style={iconContainer}>
          <AiOutlineClockCircle size={ICON_SIZE}/>
          <p style={iconText}>7:30PM</p>
          </div>
          <div style={iconContainer}>
          <FaRegCalendarAlt size={13}/>
          <p style={iconText}>10/22/2022</p>
          </div>
          <div style={iconContainer}>
          <MdOutlineLocationOn size={ICON_SIZE}/>
          <p style={iconText}>Campus Center</p>
          </div>
        </div>
        <div align="center" style={{display:"flex",width:'100%',justifyContent: 'space-around'}}>
          <RiQuestionnaireLine size={'40px'}></RiQuestionnaireLine>
          <div>
            <BsCalendarPlus size={'35px'}></BsCalendarPlus>
            <Button className="btn-dark" style = {buttonStyle}>RSVP</Button>
          </div>
        </div>
    </div>
  )
}

const containerStyle = {
    width: "60vw",
    height: "40vh",
    background: "White",
    borderRadius: 15,
    position: "relative",
    left: '5wv',
    top: '5vh',
}

const buttonStyle = {
  color: "White",
  fontWeight: "bold",
  borderRadius: '18px 5px 18px 18px'
}

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
  marginLeft: 5
}

const eventDetails = {
  display: "flex",
  fontSize: 10,
  justifyContent: "center",
}
const iconContainer = {
  display: "flex",
  fontSize: 10,
  marginLeft: 4
}
const iconText = {
  marginLeft: 2
}
export default EventCard