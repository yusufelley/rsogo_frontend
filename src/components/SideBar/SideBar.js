import React, { useState } from "react";
import "./SideBar.css"
import { AiFillHome } from "react-icons/ai"
import Button from 'react-bootstrap/Button' 
import { RiFontColor } from "react-icons/ri";
import { MdOutlineColorLens } from "react-icons/md";

const SideBar = (props) => {
    return(
        <>  
            <div style={sidebarStyle}>
                <Button class = "btn btn-dark">
                    <AiFillHome/>
                </Button>
                
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
    width: "15vw",
    backgroundColor: "black",
    color: "white"
}


export default SideBar;