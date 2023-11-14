import React from "react";

const RedFooter: React.FC = () => {
  const footerStyle: React.CSSProperties = {
    backgroundColor: "#C91651",
    color: "white",
    padding: "10px",
    textAlign: "center",
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
  };

  return (
    <footer style={footerStyle}>
      <p>CellsAtWork</p>
    </footer>
  );
};

export default RedFooter;
