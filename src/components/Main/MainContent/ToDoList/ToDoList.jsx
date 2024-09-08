import React from 'react';
import Missed from './Missed';
import Ongoing from './Ongoing';
import Completed from './Completed';

function ToDoList({ todos, filter, onEditClick, onTodoUpdate, onTodoDelete }) {
  const style = {
    listsWrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "20px",
      height: "515px",
      overflowY: "auto"
    }
  };

  // 필터에 따라 적절한 컴포넌트를 렌더링합니다.
  return (
    <div style={style.listsWrapper}>
      {filter === 'missed' && <Missed todos={todos} onEditClick={onEditClick} onTodoUpdate={onTodoUpdate} onTodoDelete={onTodoDelete} />}
      {filter === 'ongoing' && <Ongoing todos={todos} onEditClick={onEditClick} onTodoUpdate={onTodoUpdate} onTodoDelete={onTodoDelete} />}
      {filter === 'completed' && <Completed todos={todos} onEditClick={onEditClick} onTodoUpdate={onTodoUpdate} onTodoDelete={onTodoDelete} />}
    </div> 
  );
}

export default ToDoList;
