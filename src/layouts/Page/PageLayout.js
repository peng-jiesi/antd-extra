import React from 'react';

export default ({ children, wrapperClassName}) => (
  <div style={{ margin: '-24px -24px 0' }} className={wrapperClassName}>
    {children ? <div>{children}</div> : null}
  </div>
);
