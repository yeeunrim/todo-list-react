import React from "react";
import { FaAngleDown } from "react-icons/fa6";

function DropDown({ selectedFilter, onFilterChange }) {
  const getPaddingRight = () => {
    switch (selectedFilter) {
      case "completed":
        return "35px";
      case "ongoing":
        return "25px";
      case "missed":
        return "15px";
      default:
        return "25px";
    }
  };

  const getBackgroundColor = () => {
    switch (selectedFilter) {
      case "missed":
        return "#FBCAFC";
      case "ongoing":
        return "#CAE7FC";
      case "completed":
        return "#DAFCCA";
      default:
        return "#CAE7FC";
    }
  };

  const style = {
    dropdownWrapper: {
      position: "relative",
      display: "inline-block",
    },
    dropdown: {
      fontFamily: "'Nanum Gothic', sans-serif",
      fontSize: "12px",
      borderRadius: "5px",
      padding: "5px 25px 5px 10px",
      paddingRight: getPaddingRight(), // 조건에 따른 paddingRight 설정
      backgroundColor: getBackgroundColor(), // 배경색을 동적으로 설정
      outline: "none",
      appearance: "none",
    },
    icon: {
      position: "absolute",
      right: "10px",
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
    },
  };

  const handleChange = (event) => {
    onFilterChange(event.target.value);
  };

  return (
    <div style={style.dropdownWrapper}>
      <select value={selectedFilter} onChange={handleChange} style={style.dropdown}>
        <option value="ongoing">Ongoing</option>
        <option value="missed">Missed</option>
        <option value="completed">Completed</option>
      </select>
      <FaAngleDown style={style.icon} />
    </div>
  );
}

export default DropDown;
