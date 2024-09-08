import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import Header from "./Header/Header";
import MainContent from "./MainContent/MainContent";

function Main() {
  // 할 일 추가, 할 일 수정, 할 일 목록 - 상태 변경
  const [viewState, setViewState ] = useState({
    showNew: false,
    showEdit: false,
    showList: true // 기본 상태
  });
  // 추가 버튼 클릭 시, 상태 변경
  const handlePlusClick = () => {
    setViewState({ showNew: true, showEdit: false, showList: false });
  };
  // 수정 버튼 클릭 시, 상태 변경
  const handleEditClick = (todo) => {
    setViewState({ showNew: false, showEdit: true, showList: false });
    setCurrentTodo(todo);
  };
  // 이전 버튼 클릭 시, 상태 변경
  const handleBackClick = () => {
    setViewState({ showNew: false, showEdit: false, showList: true });
  };

  // 할 일 목록
  const [todos, setTodos] = useState([]);
  // 할 일 추가 등록
  const handleAddTodo = (newTodo) => {
    setTodos(prevTodos => [...prevTodos, { ...newTodo, id: uuidv4() }]); // 새로운 배열에 저장
    setViewState({ showNew: false, showEdit: false, showList: true });
    setFilter('ongoing'); // 기본 페이지 지정
  };

  // 필터링
  const category = ['ongoing', 'missed', 'completed'];
  const [filter, setFilter] = useState(category[0]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };
  useEffect(() => {
    const getFilteredTodos = () => {
      const today = new Date().toISOString().split('T')[0];
      switch (filter) {
        case 'missed':
          return todos.filter(todo => todo.date && todo.date < today && !todo.completed);
        case 'ongoing':
          return todos.filter(todo => (todo.date === null || todo.date === '' || todo.date >= today) && !todo.completed);
        case 'completed':
          return todos.filter(todo => todo.completed);
        default:
          return todos;
      }
    };
  
    setFilteredTodos(getFilteredTodos());
  }, [todos, filter]);
  

   // 업데이트 시, 새 배열에 업데이트 등록
   const handleTodoUpdate = (updatedTodo) => {
    setTodos(prevTodos => 
      prevTodos.map(todo => 
        todo.id === updatedTodo.id ? updatedTodo : todo
      )
    );
    setViewState({ showNew: false, showEdit: false, showList: true });
  };

  // 할 일 삭제 처리
  const handleTodoDelete = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  // 현재 선택 된 할 일
  const [currentTodo, setCurrentTodo] = useState(null);

  return(
    <>
      <Header 
        title={viewState.showNew ? "' New To-Do ' " : viewState.showEdit ? "' Edit To-Do ' " : "' To-Do List ' "} 
        showNew={viewState.showNew} 
        showEdit={viewState.showEdit}
        handleBackClick={handleBackClick} 
      />
      <MainContent 
        showNew={viewState.showNew}
        showEdit={viewState.showEdit}
        showList={viewState.showList}
        todos={filteredTodos}
        filter={filter}
        onFilterChange={handleFilterChange}
        onPlusClick={handlePlusClick}
        onEditClick={handleEditClick}
        onAddTodo={handleAddTodo}
        onTodoUpdate={handleTodoUpdate}
        onTodoDelete={handleTodoDelete} 
        currentTodo={currentTodo}
      />
    </>
  )
}

export default Main;
