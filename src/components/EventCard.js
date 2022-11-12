import React from 'react'
import { RiQuestionnaireLine } from 'react-icons/ri'
import { BsCalendarPlus } from 'react-icons/bs'
import Button from 'react-bootstrap/Button'
 
function EventCard(props) {
  return (
    <div style={containerStyle} className="shadow">
        <div>
            Welcome Back
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

export default EventCard