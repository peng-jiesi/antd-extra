import React from "react";

export default ({ children, wrapperClassName }) => (
  <div className={wrapperClassName}>{children ? children : null}</div>
);
