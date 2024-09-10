import React from "react";
import rabbitImage from "../../../../assets/rabbit.png";
import EditForm from "./EditForm";

function Edit({ currentTodo, onTodoUpdate }) {
  const style = {
    toDoLeft: {
      position: "relative",
      width: "100%",
      height: "calc(768px - 29%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    },
    toDoNewBoxImg: {
      position: 'absolute',
      top: '-45px',
      right: '30px',
      width: '200px',
    },
    toDoEditBox: {
      fontFamily: "'Nanum Gothic', sans-serif",
      display: 'flex',
      flexDirection: 'column', 
      gap: '30px',
      width: 'calc(100% - 25%)',
      height: '350px',
      padding: '30px',
      border: '1px solid black',
      borderRadius: '20px',
    }
  }

  return(
    <div style={style.toDoLeft}>
      <img src={rabbitImage} alt="rabbit" style={style.toDoNewBoxImg} />
      <div style={style.toDoEditBox}>
        <EditForm todo={currentTodo} onTodoUpdate={onTodoUpdate} />
      </div>
    </div>
  )
}

export default Edit;
