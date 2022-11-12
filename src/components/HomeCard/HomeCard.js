import React, {useState} from "react";
import Card from 'react-bootstrap/Card'
import "./HomeCard.css"

function HomeCard(props){
    const bg = props.bg
    const txtColor = props.textColor
    const img = props.img
    const text = props.text
    const time = props.time

    return (
        <div className="container">
            <img src={img} alt="msa"></img>
            <div className="flex1">
                <Card className="card" 
                    bg={bg}  
                    text={txtColor}
                >
                    <Card.Body className="text-container">
                        <Card.Text className="mt-0">{text}</Card.Text>
                        {/*<Card.Text className="mt-0">{time}</Card.Text>*/}
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default HomeCard;