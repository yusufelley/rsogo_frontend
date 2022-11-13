import { height } from "@mui/system";
import React from "react";
import { IoIosAdd } from "react-icons/io";
import { PRIMARY_COLOR } from "../configs/colors";
export const CreateButton = ({ handleClick }) => {
  return (
    <button
      className="shadow"
      style={{
        backgroundColor: PRIMARY_COLOR,
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
      onClick={() => handleClick()}
    >
      <IoIosAdd size={60} color="white" />
    </button>
  );
};
