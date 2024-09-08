import React from "react";
import ongoing from "../../../../assets/ongoing.png";
import List from "./List";

function Ongoing({ todos, onEditClick, onTodoUpdate, onTodoDelete }) {
  const style = {
    ongoingWrapper: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "20px"
    },
    ongoingImg: {
      width: "70px"
    },
    ongoingWord: {
      fontFamily: "Nanum Gothic",
      fontSize: "10px"
    }
  };

  return (
    <>
      {todos.length === 0 ? (
        <div style={style.ongoingWrapper}>
          <img src={ongoing} alt="ongoing" style={style.ongoingImg} />
          <p style={style.ongoingWord}>No tasks. Please add it!</p>
        </div>
      ) : (
        <List todos={todos} onEditClick={onEditClick} onTodoUpdate={onTodoUpdate} onTodoDelete={onTodoDelete} />
      )}
    </>
  );
}

export default Ongoing;
