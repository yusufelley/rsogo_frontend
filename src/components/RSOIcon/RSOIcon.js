import React from "react";

const RSOIcon = ({ img, handleClick }) => {
  return (
    <button
      style={{ borderRadius: "50rem", backgroundColor: "transparent" }}
      className="rso-button"
      onClick={() => handleClick()}
    >
      <img className="club-img" src={img} alt={img}></img>
    </button>
  );
};

export default RSOIcon;
