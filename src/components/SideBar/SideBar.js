import React, { useState } from "react";
import "./SideBar.css"
import { AiFillHome } from "react-icons/ai"
//import Button from 'react-bootstrap/Button' 
import { Pressable, Button } from 'react';
import { RiFontColor } from "react-icons/ri";
import { MdOutlineColorLens, MdSystemSecurityUpdate } from "react-icons/md";

const SideBar = (props) => {
    return(
        <>  
            <div style={sidebarStyle}>
                {/* <Button class="btn btn-dark">
                    <AiFillHome/>
                </Button> */}
                {/* <Pressable style={homeButton} onPress={console.log("Pressed")}>
                    <AiFillHome/>
                </Pressable> */}
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
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
}

export default SideBar;