import React from "react";

function Template({ children }) {
  const style = {
    template: {
      width: "512px",
      height: "768px",
      position: "relative",
      background: "white",
      borderRadius: "16px",
      boxShadow: '0 0 8px rgba(0, 0, 0, 0.04)',
      margin: '0 auto',
      marginTop: '96px',
      marginBottom: '32px',
      display: 'flex',
      flexDirection: 'column'
    }
  }

  return(
    <div style={style.template}>
      {children}
    </div>
  )
}

export default Template;
