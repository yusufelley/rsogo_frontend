//import "./SideBar.css"
import { AiFillHome } from "react-icons/ai";
import React from "react";

const SideBar = (props) => {
  return (
    <div style={sidebarStyle}>
      <button>
        <AiFillHome />
      </button>
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
  background: "maroon",
  flexDirection: "column",
};

const homeButton = {
  alignItems: "center",
  justifyContent: "center",
  paddingVertical: 12,
  paddingHorizontal: 32,
  borderRadius: 4,
  elevation: 3,
  backgroundColor: "black",
};

export default SideBar;
