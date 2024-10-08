import React, { useState } from "react";
import LoadingWin from "./LoadingWin";
import Main from "../Main/Main";

function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  return(
    <>
      {/* 3초 후, 로딩이 끝나면 메인 컴포넌트 */}
      {isLoading ? <LoadingWin /> : <Main />}
    </>
  )
}

export default Loading;