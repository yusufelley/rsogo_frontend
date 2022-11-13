import { AiFillHome } from "react-icons/ai";
import "../../App.css";
import React from "react";
import "./SideBar";
import { CreateEventScreen } from "../../screens/CreateEventScreen";
import { CreateButton } from "../CreateButton";
import OneRSO from "../../screens/OneRSO";
import RSOIcon from "../RSOIcon/RSOIcon";
import msa from "../../assets/msa.png";
import { PRIMARY_COLOR } from "../../configs/colors";
import { Home } from "../../screens/Home";

const SideBar = (props) => {

    const rsoData = props.rsoData;

    const showHome =  props.showHome
    const setShowHome = props.setShowHome
    const currCard = props.currCard;
    const setCard = props.setCard;
    const showCreateEvent = props.showCreateEvent;
    const setShowCreateEvent = props.setShowCreateEvent;
    const toggleCreateEvent = props.toggleCreateEvent;



  // state = {
  //     touched: false
  // }

  // const toggleTouched = () => {
  //     this.setState( prevState => ({
  //         touched: !prevState.touched
  //     }));
  // }

  // const handleMouseUp = () => {
  //     // Handle smooth animation when clicking without holding
  //     setTimeout( () => {
  //         this.setState({ touched: false });
  //     }, 150);
  // }
    const homeClick = () => {
        setShowHome(true);
        return (
            <div className="App" style={{ backgroundColor: "blue", display: "flex" }}>
                {showCreateEvent ? (
                    <CreateEventScreen toggleCreateEvent={toggleCreateEvent} />
                ) : (
                    <>
                    <CreateButton handleClick={toggleCreateEvent} />
            </>
        )}
      <SideBar rsoData={rsoData} />
      {showHome ? <Home /> : <OneRSO currCard = {currCard} setCard = {setCard}/>}
    </div>
            
        )
    }
  return (
    <div style={sidebarStyle}>
      {/* {/* <button style = {homeButton}>
                <AiFillHome style = {iconStyle}/>
            </button> */}
      <button style={homeButton} onClick = {homeClick}>
        <AiFillHome style={iconStyle} />
      </button>

      {/* <button
                className={className}
                onMouseDown={this.toggleTouched}
                onMouseUp={this.handleMouseUp}
                >
                <AiFillHome style = {iconStyle}/>
                
            </button> */}
      <hr
        style={{
          background: "white",
          color: "white",
          borderColor: "white",
          height: "3px",
          width: "10vw",
          transparency: "0",
        }}
      />
      {rsoData.map((rso) => (
        <div style={{ marginBottom: "10px" }}>
          <RSOIcon img={rso.img} />
        </div>
      ))}
      {/* <RSOIcon img = {msa}/> */}
    </div>
  );
};

const sidebarStyle = {
  display: "flex",
  height: "100vh",
  width: "15vw",
  background: PRIMARY_COLOR,
  flexDirection: "column",
  alignItems: "center",
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
  backgroundColor: PRIMARY_COLOR,
  borderColor: "transparent",
};

export default SideBar;
