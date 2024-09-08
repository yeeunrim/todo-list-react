import React from "react";
import missed from "../../../../assets/missed.png"; 
import List from "./List";

function Missed({ todos, onEditClick, onTodoUpdate, onTodoDelete }) {
  const style = {
    missedWrapper: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "20px"
    },
    missedImg: {
      width: "70px"
    },
    missedWord: {
      fontFamily: "Nanum Gothic",
      fontSize: "10px"
    }
  };

  return (
    <>
      {todos.length === 0 ? (
        <div style={style.missedWrapper}>
          <img src={missed} alt="missed" style={style.missedImg} />
          <p style={style.missedWord}>No missed tasks. Please check your tasks!</p>
        </div>
      ) : (
        <List todos={todos} onEditClick={onEditClick} onTodoUpdate={onTodoUpdate} onTodoDelete={onTodoDelete} />
      )}
    </>
  );
}

export default Missed;
