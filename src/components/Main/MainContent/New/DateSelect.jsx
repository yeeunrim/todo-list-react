import React, { useState, useEffect } from "react";
import Datetime from 'react-datetime';
import "../../../../styles/dateselect.css";
import { LuCalendarDays } from "react-icons/lu";
import "react-datetime/css/react-datetime.css"; 

const DateSelect = ({ selectedDate, onDateChange }) => {
  const [date, setDate] = useState('');
  const format = 'YYYY-MM-DD';
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setDate(selectedDate || '');
  }, [selectedDate]);

  const handleClickButton = () => {
    setOpen(!open);
  };

  const handleChangeCalendar = (selected) => {
    const formattedDate = selected.format(format);
    setDate(formattedDate);
    setOpen(false);
    onDateChange(formattedDate);
  };

  return (
    <div className="dateSelection">
      <input
        type='text'
        value={date}
        placeholder='selected date'
        className="inputDate"
        readOnly // 사용자가 직접 입력하지 못하게 설정
      />
      <button 
        type='button' 
        onClick={handleClickButton} // 달력을 열고 닫는 버튼에 연결
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <LuCalendarDays />
      </button>
      {open && (
        <Datetime
          input={false}
          timeFormat={false}
          dateFormat={format}
          value={date}
          onChange={handleChangeCalendar} // 날짜가 선택되었을 때 호출
          closeOnSelect={true} // 날짜 선택 시 달력을 닫음
        />
      )}
    </div>
  );
};

export default DateSelect;
