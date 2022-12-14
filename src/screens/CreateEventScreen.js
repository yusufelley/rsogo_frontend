import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { DayPicker } from "react-day-picker";
import { MobileDateTimePicker } from "@mui/x-date-pickers";
import TextField from "@mui/material/TextField";
import moment from "moment";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import axios from "axios";

const FormTextBox = ({
  handleTextChange,
  handleDateTimeChange,
  label,
  propName,
  multiline,
  dateTime,
}) => {
  return (
    <div style={{ flex: 1, flexDirection: "row" }}>
      <div>{label}</div>
      {multiline ? (
        <textarea
          style={inputStyling}
          onChange={
            handleTextChange
              ? (e) => handleTextChange(e, propName)
              : (e) => handleDateTimeChange(e)
          }
        />
      ) : (
        <input
          style={inputStyling}
          onChange={
            handleTextChange
              ? (e) => handleTextChange(e, propName)
              : (e) => handleDateTimeChange(e)
          }
        />
      )}
    </div>
  );
};

export const CreateEventScreen = ({ toggleCreateEvent, handleUpdate }) => {
  const initialEventDetails = {
    rso: undefined,
    name: undefined,
    date: undefined,
    image: undefined,
    location: undefined,
    details: undefined,
  };
  const [dateTimeMoment, setDateTimeMoment] = useState(moment());
  const [eventDetails, setEventDetails] = useState(initialEventDetails);
  const [image, setImage] = useState("");

  const handleDateTimeChange = (event) => {
    setEventDetails((prev) => ({
      ...prev,
      date: moment(event.target.value).format("YYYY-MM-DD HH:mm"),
    }));
  };

  const handleTextChange = (event, propName) => {
    console.log("property name:", propName);
    console.log("text: ", event.target.value);
    setEventDetails((prev) => ({ ...prev, [propName]: event.target.value }));
  };

  // const handleImage = (e) => {
  //   console.log(e.target.files[0])
  //   setEventDetails((prev) => ({...prev, image: e.target.files[0]}))
  //   const formData = new FormData()
  //   formData.append('image',image)
  //   setEventDetails((prev) => ({...prev, image: formData}))
  // }

  // const handleAPI = () => {
  //   const formData = new FormData()
  //   formData.append('image',image)
  //   axios.post('http://localhost:3001/CreateEvent',formData).then((res) => {
  //     console.log(res)
  //   })
  // }

  console.log("Event Details:", eventDetails);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          zIndex: 20,
          position: "absolute",
        }}
      >
        <div
          style={{
            backgroundColor: "#EEE",
            display: "flex",
            height: "58vh",
            width: "80vw",
            borderRadius: "1rem",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
          }}
          className="shadow"
        >
          <div>Event Creation</div>
          <FormTextBox
            label="RSO"
            propName="rso"
            handleTextChange={handleTextChange}
          />
          <FormTextBox
            label="Name"
            propName="name"
            handleTextChange={handleTextChange}
          />
          <FormTextBox
            label="Date & Time"
            propName="date"
            handleDateTimeChange={handleDateTimeChange}
            dateTime={eventDetails.date}
          />
          <FormTextBox
            label="Location"
            propName="location"
            handleTextChange={handleTextChange}
          />
          <FormTextBox
            label="Image URL"
            propName="image"
            handleTextChange={handleTextChange}
          />

          <FormTextBox
            label="Details"
            propName="details"
            handleTextChange={handleTextChange}
            multiline
          />
          {/* <div style={{alignSelf:"center",width:"230px",padding:"10px"}}>
            <input type="file" name="file" onChange={handleImage}></input>
          </div> */}

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              flex: 1,
              width: "55vw",
            }}
          >
            <Button
              onClick={toggleCreateEvent}
              style={{
                marginTop: "1rem",
                backgroundColor: "red",
                borderColor: "red",
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                fetch("http://localhost:3001/CreateEvent", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(eventDetails),
                });
                handleUpdate();
                toggleCreateEvent();
              }}
              style={{ marginTop: "1rem" }}
            >
              Create
            </Button>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          position: "absolute",
          zIndex: 15,
          opacity: "85%",
          backgroundColor: "black",
          height: "100vh",
          width: "100vw",
        }}
      ></div>
    </div>
  );
};

const inputStyling = {
  borderRadius: 10,
  border: "none",
  boxShadow: "2px 2px 2px #DDD",
};
