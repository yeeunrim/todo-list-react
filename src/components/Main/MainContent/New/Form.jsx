import React, { useState } from "react";
import "../../../../styles/form.css";
import DateSelect from "./DateSelect";
import { Switch } from 'antd';

function Form({ onAddTodo }) {
  // 입력 필드가 여러개 -> 상태 객체
  const [formatData, setFormatData] = useState({
    title: '',
    content: '',
    date: '',
    completed: false, // 새로운 항목은 기본적으로 완료되지 않은 상태로 설정
    hasDeadline: false // 스위치 상태를 관리
  });

  // 입력 필드의 변경을 처리하는 함수
  const handleChange = (event) => {
    const { name, value } = event.target;
    // 이전 상태를 유지하면서 해당 name 속성에 대한 값을 업데이트합니다.
    setFormatData(prevState => ({
      ...prevState, 
      [name]: value // name 속성에 해당하는 상태 속성을 업데이트
    }));
  };

  // 날짜 변경 시 호출되는 함수
  const handleDateChange = (selectedDate) => {
    setFormatData(prevState => ({
      ...prevState,
      date: selectedDate
    }));
  };

  // 스위치 상태 변경 시 호출되는 함수
  const handleSwitchChange = (checked) => {
    setFormatData(prevState => ({
      ...prevState,
      hasDeadline: checked,
      date: checked ? prevState.date : '' // 스위치가 해제되면 날짜도 초기화
    }));
  };

  // submit 시에 폼 데이터 처리
  const handleSubmit = (event) => {
    event.preventDefault(); // 페이지 새로 고침 방지
    onAddTodo(formatData); // 상위 컴포넌트로 데이터 전달
    setFormatData({
      title: '',
      content: '',
      date: '',
      completed: false, 
      hasDeadline: false
    }); // 폼 초기화
  };

  // 모든 필드가 입력된 경우 버튼 활성화 여부 체크
  const isFormValid = () => {
    return formatData.title && formatData.content && (!formatData.hasDeadline || formatData.date);
  };

  return (
    <form className="toDoNewBoxInputs" onSubmit={handleSubmit}>
      <div className="toDoNewBoxInput">
        <label>Title</label>
        <input 
          type="text" 
          name="title"
          value={formatData.title}
          onChange={handleChange}
          placeholder="write title" 
          className="inputText" 
          maxLength={45}
          required
        />
      </div>
      <div className="toDoNewBoxInput">
        <label>Content</label>
        <input 
          type="text" 
          name="content"
          value={formatData.content}
          onChange={handleChange}
          placeholder="write content" 
          className="inputContent" 
          maxLength={45}
          required
        />
      </div>
      <div className="toDoNewBoxInput">
        <div className="toDoNewBoxDeadline">
          <label>Deadline</label>
          <Switch checked={formatData.hasDeadline} onChange={handleSwitchChange} />
        </div>
        {formatData.hasDeadline && <DateSelect selectedDate={formatData.date} onDateChange={handleDateChange} />}
      </div>
      <div className="toDoNewBoxInput">
        <button className="saveBtn" type="submit" disabled={!isFormValid()}>
          create
        </button>
      </div>
    </form>
  )
}

export default Form;
