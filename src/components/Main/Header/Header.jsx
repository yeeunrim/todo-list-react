import React from "react";
import Back from "./Back";

function Header({ title, showNew, showEdit, handleBackClick }) {
  const style = {
    title: {
      fontFamily: "'Schoolbell', cursive",
      fontSize: "50px",
      textAlign: "center",
      letterSpacing: "10px",
      margin: "50px 0",
    },
    today: {
      fontFamily: "'Nanum Gothic', sans-serif",
      fontSize: "10px",
      margin: "30px 0 0 30px",
    }
  };

  // 날짜 동적으로 표시
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // showNew 또는 showEdit가 true일 때 Back 버튼 표시
  const showBackButton = showNew || showEdit;

  return (
    <>
      {showBackButton? (
        <Back onClick={handleBackClick} />
      ) : (
        <div style={style.today}>
          <p>[ {currentDate} ]</p>
        </div>
      )}
      <div style={style.title}>
        <p>{title}</p>
      </div>
    </>
  );
}

export default Header;
