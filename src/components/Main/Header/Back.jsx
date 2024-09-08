import React from "react";
import arrow from "../../../assets/arrow.png"; // 이미지 경로 확인

function Back({ onClick }) {
  const style = {
    back: {
      width: '25px',
      margin: "25px 0 0 25px",
      cursor: 'pointer'
    },
    arrowImg: {
      width: '25px'
    }
  };

  return (
    <div style={style.back} onClick={onClick}>
      <img src={arrow} alt="arrow" style={style.arrowImg} />
    </div>
  );
}

export default Back;
