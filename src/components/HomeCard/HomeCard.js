import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import "./HomeCard.css";

function HomeCard(props) {
  const [bg, setBg] = useState(props.bg);
  const [txtColor, setTxtColor] = useState(props.txtColor);
  const [img, setImg] = useState(props.img);
  const [text, setText] = useState(props.text);
  const [time, setTime] = useState(props.time);
  const [day, setDay] = useState(props.setDay);

  return (
    <div className="home-card-container">
      <img className="club-img" src={img} alt="club-img"></img>
      <div className="flex1">
        <Card className="card" bg={bg} text={txtColor}>
          <Card.Body className="text-container">
            <Card.Text
              className="mt-0"
              style={{
                fontFamily: "Raleway",
                fontWeight: "600",
              }}
            >
              {text}
            </Card.Text>
            <Card.Text className="mt-0">{time}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default HomeCard;
