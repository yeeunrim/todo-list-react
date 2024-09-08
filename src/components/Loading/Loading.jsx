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
      {isLoading ? <LoadingWin /> : <Main />}
    </>
  )
}

export default Loading;