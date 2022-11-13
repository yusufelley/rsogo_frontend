//import "./SideBar.css"
import { AiFillHome } from "react-icons/ai";
import React from "react";
import { FaCentercode } from "react-icons/fa";

const SideBar = (props) => {
  return (
    <div style={sidebarStyle}>
      <button style={homeButton}>
        <AiFillHome style={iconStyle} />
      </button>
      <hr
        style={{
          background: "white",
          color: "white",
          borderColor: "white",
          height: "3px",
          transparency: "0",
        }}
      />
      {/* <Pressable style = {homeButton} onPress={console.log("Pressed")}>
                <AiFillHome/>
            </Pressable>  */}
    </div>
  );
};

const sidebarStyle = {
  height: "100vh",
  // width: "15vw",
  display: "inline-block",
  width: "15vw",
  background: "#FF325C",
  flexDirection: "column",
};

const iconStyle = {
  height: "4vh",
  width: "11vw",
};

const homeButton = {
  marginTop: "1vh",
  height: "6vh",
  width: "15vw",
  color: "white",
  backgroundColor: "#FF325C",
  borderColor: "transparent",
};

export default SideBar;
