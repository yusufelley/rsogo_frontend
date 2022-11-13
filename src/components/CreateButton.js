import { height } from "@mui/system";
import React from "react";
import { IoIosAdd } from "react-icons/io";

export const CreateButton = () => {
  return (
    <button
      className="shadow"
      style={{
        backgroundColor: "#FF325C",
        height: "3.5rem",
        width: "3.5rem",
        borderRadius: "10rem",
        position: "absolute",
        bottom: 0,
        right: 0,
        zIndex: 10,
        margin: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <IoIosAdd size={60} color="white" />
    </button>
  );
};
