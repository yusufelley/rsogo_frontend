import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai" 

const SideBar = (props) => {
    return(
        <>  
            <div style={sidebarStyle}>
                <AiFillHome style={homeButton}/>
            </div>
            
        </>
    )
}

const sidebarStyle = {
    height: "100vh",
    width: "15vw",
    background: 'maroon'
}

const homeButton = {
    height: "5vh",
    width: "7vh",
}

export default SideBar;