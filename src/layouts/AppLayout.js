import React from "react";

export default ({ children, wrapperClassName }) => (
  <div
    style={{
      height: "100vh",
      backgroundColor: "#FFFFFF",
      overflow: "auto",
      padding: "18px 12px",
    }}
    className={`app-layout ${wrapperClassName}`}
  >
    {children ? children : null}
  </div>
);
