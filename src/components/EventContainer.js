import React from 'react'

function EventContainer(props) {
  return (
    <div style={containerStyle} className="shadow">
        <div>
            Welcome Back
        </div>
        EventContainer
    </div>
  )
}

const containerStyle = { 
    width: "60vw",
    height: "40vh",
    background: "Cyan",
    borderRadius: 15,
    position: "relative",
    left: '5wv',
    top: '5vh',
    
}
export default EventContainer