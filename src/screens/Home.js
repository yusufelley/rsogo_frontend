import React, { useState } from "react";
import { Row } from "react-bootstrap";
import { ScrollingContainer } from "../components/ScrollingContainer";
import SideBar from '../components/SideBar/SideBar';
import msa from '../assets/msa.png'

export const Home = (props) => {
    const cards = [{bg:"danger",
                    txtColor:"white",
                    img: msa,
                    text: "MSA Welcome Back",
                    time: "10:0pm"},
                    {bg:"danger",
                    txtColor:"white",
                    img: msa,
                    text: "MSA Welcome Back",
                    time: "10:00pm"},
                    {bg:"danger",
                    txtColor:"white",
                    img: msa,
                    text: "MSA Welcome Back",
                    time: "10:00pm"},
                    {bg:"danger",
                    txtColor:"white",
                    img: msa,
                    text: "MSA Welcome Back",
                    time: "10:00pm"},
                    {bg:"danger",
                    txtColor:"white",
                    img: msa,
                    text: "MSA Welcome Back",
                    time: "10:00pm"},
                    {bg:"danger",
                    txtColor:"white",
                    img: msa,
                    text: "MSA Welcome Back",
                    time: "10:00pm"},
                    {bg:"danger",
                    txtColor:"white",
                    img: msa,
                    text: "MSA Welcome Back",
                    time: "10:00pm"}
                    ]
    return(
        <div className="container">
            <SideBar/>
            <ScrollingContainer cardData={cards}></ScrollingContainer>
        </div>
    )

    
}