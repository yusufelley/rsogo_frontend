import { Button } from "bootstrap";
import React, { useState } from "react";
import { View, TouchableHighlight } from "react";
import { AiFillHome } from "react-icons/ai" 

const SideBar = (props) => {
    return(
        <>  
            <div style={sidebarStyle}>
                
            </div>
        </>
    )
}

const sidebarStyle = {
    height: "100vh",
    width: "15vw",
    background: 'maroon',
    flexDirection: "column"
}

const homeButton = {
    height: "5vh",
    width: "7vh",
}

export default SideBar;