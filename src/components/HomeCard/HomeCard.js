import React, {useState} from "react";
import Card from 'react-bootstrap/Card'
import "./HomeCard.css"

function HomeCard(props){
    const bg = props.bg
    const txtColor = props.textColor
    const img = props.img
    const text = props.text

    return (
        <div className="container">
            <img src={img} alt="msa"></img>
            <Card className="flex1" 
                bg={bg}  
                text={txtColor}
            >
                <Card.Body>
                    <Card.Text>{text}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default HomeCard;