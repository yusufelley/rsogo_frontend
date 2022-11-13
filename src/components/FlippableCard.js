import React,{useState} from "react";
import "./FlippableCard.css";
import EventCard from "./EventCard";
import { CSSTransition } from "react-transition-group";

const FlippableCard = (props) => {
  const img = props.img;
  const titleText = props.title;
  const time = props.time;
  const date = props.date;
  const location = props.location;
  const [showFront,setShowFront] = useState(true);
  const toggleShowFront = () => { setShowFront((v) => !v) }

  return (
    <div className="flippable-card-container">
      <CSSTransition in={showFront} timeout={300} classNames="flip">
        <EventCard
        handleClick={toggleShowFront}
          img={props.img}
          titleText={props.title}
          time={props.text}
          date={props.date}
          location={props.location}
        />
      </CSSTransition>
    </div>
  );
};

export default FlippableCard;
