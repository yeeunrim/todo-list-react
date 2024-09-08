import React from "react";

function Layout({ showNew, showEdit, showList, children }) {
  const style = {
    layout: {
      width: "450px",
      height: "26px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 30px",
      marginBottom: "20px"
    }
  }
  return(
    <>
      {showList && (
        <div style={style.layout}>
          {children}
        </div>
      )}
    </>
    
  )
}

export default Layout;
