import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { DayPicker } from "react-day-picker";
import { MobileDateTimePicker } from "@mui/x-date-pickers";
import TextField from "@mui/material/TextField";
import moment from "moment";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
//import axios from "axios";

const FormTextBox = ({ handleTextChange, label, propName, multiline }) => {
  return (
    <div style={{ flex: 1, flexDirection: "row" }}>
      <div>{label}</div>
      {multiline ? (
        <textarea
          style={inputStyling}
          onChange={(e) => handleTextChange(e, propName)}
        />
      ) : (
        <input
          style={inputStyling}
          onChange={(e) => handleTextChange(e, propName)}
        />
      )}
    </div>
  );
};

export const CreateEventScreen = () => {
  const initialEventDetails = {
    name: undefined,
    date: undefined,
    time: undefined,
    image: undefined,
    location: undefined,
    details: undefined,
  };
  const [dateTimeMoment, setDateTimeMoment] = useState(moment());
  const [eventDetials, setEventDetails] = useState(initialEventDetails);

  const handleDateTimeChange = (dateTime) => {
    setDateTimeMoment(dateTime);
    const date = dateTime.subtract(10, "days").calendar();
    const time = dateTime.format("LT");
    setEventDetails((prev) => ({ ...prev, date: date, time: time }));
  };

  const handleTextChange = (event, propName) => {
    console.log("property name:", propName);
    console.log("text: ", event.target.value);
    setEventDetails((prev) => ({ ...prev, [propName]: event.target.value }));
  };

  console.log("Event Detials:", eventDetials);

  return (
    <div
      style={{
        backgroundColor: "#EEE",
        width: "10",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <div>Event Creation</div>
      <FormTextBox
        label="Name"
        propName="name"
        handleTextChange={handleTextChange}
      />
      <FormTextBox
        label="Date"
        propName="date"
        handleTextChange={handleTextChange}
      />
      <FormTextBox
        label="Time"
        propName="time"
        handleTextChange={handleTextChange}
      />
      <FormTextBox
        label="Location"
        propName="location"
        handleTextChange={handleTextChange}
      />
      <FormTextBox
        label="Details"
        propName="details"
        handleTextChange={handleTextChange}
        multiline
      />
      <Button
        onClick={() => {
          fetch("http://localhost:3001/CreateEvent", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(eventDetials),
          });
        }}
        style={{ marginTop: "1rem" }}
      >
        Create
      </Button>
    </div>
  );
};

const inputStyling = {
  borderRadius: 10,
  border: "none",
  boxShadow: "2px 2px 2px #DDD",
};
