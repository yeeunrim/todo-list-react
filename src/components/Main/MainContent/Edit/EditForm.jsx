import React, { useState, useEffect } from "react";
import "../../../../styles/form.css";
import { Switch } from 'antd';
import DateSelect from "../New/DateSelect";

function EditForm({ todo, onTodoUpdate }) { 
  // 값 변경 없이 전송했을 때에도 이전의 값을 저장하기 위해 사용
  // 컴포넌트에 처음 전송했을 때의 값을 저장하는 상태
  const [initialTodo, setInitialTodo] = useState(todo);

  const [title, setTitle] = useState(todo.title || '');
  const [content, setContent] = useState(todo.content || '');
  const [hasDeadline, setHasDeadline] = useState(todo.hasDeadline || false);
  const [date, setDate] = useState(todo.date || null);

   // todos가 변경되면 상태 업데이트
   useEffect(() => {
    // todo의 속성이 변경되었을 때에만 상태를 업데이트
    if (todo) {
      setInitialTodo(todo);
      setTitle(todo.title || '');
      setContent(todo.content || '');
      setHasDeadline(todo.hasDeadline || false);
      setDate(todo.date || null);
    }
  }, [todo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 값이 변경되지 않았더라도, 수정된 todo를 그대로 유지하기 위해
    // onTodoUpdate 함수 호출
    onTodoUpdate({
      ...todo,
      title,
      content,
      hasDeadline,
      date
    });
  };

  // 날짜 변경 시 호출되는 함수
  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
  };

  // 모든 필드가 입력된 경우 버튼 활성화 여부 체크
  const isFormValid = () => {
    return title && content && (!hasDeadline || date);
  };

  return(
    <form className="toDoNewBoxInputs" onSubmit={handleSubmit}>
      <div className="toDoNewBoxInput">
        <label>Title</label>
        <input 
          type="text" 
          value={title}
          className="inputText" 
          maxLength={45} 
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="toDoNewBoxInput">
        <label>Content</label>
        <input 
          type="text" 
          value={content}
          className="inputText" 
          maxLength={45} 
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div className="toDoNewBoxInput">
        <div className="toDoNewBoxDeadline">
          <label>Deadline</label>
          <Switch checked={hasDeadline}
            onChange={(checked) => setHasDeadline(checked)} />
        </div>
        {hasDeadline && <DateSelect selectedDate={date} onDateChange={handleDateChange} />}
      </div>
      <div className="toDoNewBoxInput">
        <button className="saveBtn" type="submit" disabled={!isFormValid()}>
          save
        </button>
      </div>
    </form>
  )
}

export default EditForm;
