import React from "react";
import loadingImg from "../../assets/loading.png"

function LoadingWin() {
  const style = {
    loadingImg: {
      borderRadius: "16px"
    }
  }
  return(
    <img src={loadingImg} alt="loadingImg" style={style.loadingImg} />
  )
}

export default LoadingWin;
