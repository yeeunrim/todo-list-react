import React from "react";
import { FaPlus } from "react-icons/fa6";

function Plus({ onClick }) {
  const style = {
    plusBtn: {
      display: "flex",
      height: "16px",
      background: "black",
      alignItems: "center",
      padding: "5px 10px",
      borderRadius: "5px",
    },
    plusBtnText: {
      display: "flex",
      gap: "5px",
      color: "white",
      fontFamily: "Nanum Gothic",
      fontSize: "12px"
    }
  }
  return(
    <div onClick={onClick} style={style.plusBtn}>
      <p style={style.plusBtnText}><FaPlus /> To-do</p>
    </div>
  )
}

export default Plus;
