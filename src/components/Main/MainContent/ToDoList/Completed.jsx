import React from "react";
import completed from "../../../../assets/completed.png";
import List from "./List";

function Completed({ todos, onEditClick, onTodoUpdate, onTodoDelete }) {
  const style = {
    completedWrapper: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "20px"
    },
    completedImg: {
      width: "70px"
    },
    completedWord: {
      fontFamily: "Nanum Gothic",
      fontSize: "10px"
    }
  };

  console.log('Completed todos:', todos); // 디버깅

  return (
    <>
      {todos.length === 0 ? (
        <div style={style.completedWrapper}>
          <img src={completed} alt="completed" style={style.completedImg} />
          <p style={style.completedWord}>No completed tasks!</p>
        </div>
      ) : (
        <List todos={todos} onEditClick={onEditClick} onTodoUpdate={onTodoUpdate} onTodoDelete={onTodoDelete} />
      )}
    </>
  );
}

export default Completed;
