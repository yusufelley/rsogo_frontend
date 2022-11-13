import React from 'react';

const RSOIcon = (props) => {
    const img = props.img
    const handleEvent = () => {console.log()}

    return(
            <button style={{borderRadius:"50rem", backgroundColor:"transparent"}}  className = "rso-button" onClick = {() => {console.log("pressed RSO")}} >
                <img className = "club-img" src={img} alt={img}></img>
            </button>
    )
}

export default RSOIcon