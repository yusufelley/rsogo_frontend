import React from 'react'

function EventContainer(props) {
  return (
    <div style={containerStyle} className="shadow-3">
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
    background: "golden",
    borderRadius: 15
    
}
export default EventContainer