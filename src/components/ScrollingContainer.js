import React from "react";
import Card from "react-bootstrap/Card";

export const ScrollingContainer = ({ children }) => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#d1d5db",
          width: "80vw", // remove
          height: "95vh", // remove
          marginTop: "5vh", // remove
          marginLeft: "20vw", // remove
        }}
        className="overflow-scroll"
      >
        {children}
      </div>
    </div>
  );
};
