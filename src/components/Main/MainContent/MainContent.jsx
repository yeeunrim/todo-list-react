import React from "react";
import Layout from "./Layout/Layout";
import DropDown from "./Layout/DropDown";
import Plus from "./Layout/Plus";
import New from "./New/New";
import ToDoList from "./ToDoList/ToDoList";
import Edit from "./Edit/Edit";

function MainContent({
  showNew,
  showEdit,
  showList,
  todos,
  filter,
  onFilterChange,
  onPlusClick,
  onEditClick,
  onAddTodo,
  onTodoUpdate,
  onTodoDelete,
  currentTodo
}) {
  return(
    <>
      <Layout showList={showList}>
        <DropDown selectedFilter={filter} onFilterChange={onFilterChange} />
        <Plus onClick={onPlusClick} />
      </Layout>
      {showNew && <New onAddTodo={onAddTodo} />}
      {showEdit && <Edit currentTodo={currentTodo} onTodoUpdate={onTodoUpdate} />}
      {showList && <ToDoList todos={todos} filter={filter} onEditClick={onEditClick} onTodoUpdate={onTodoUpdate} onTodoDelete={onTodoDelete} />}
    </>
  )
}

export default MainContent;
