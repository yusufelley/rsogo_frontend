import React, { useState } from "react";
import { Row } from "react-bootstrap";
import SideBar from '../components/SideBar/SideBar';

export const Home = (props) => {
    return(
        <div>
            <SideBar/>
        </div>
    )

    const homeStyle = {
        flexDirection: Row
    }
}