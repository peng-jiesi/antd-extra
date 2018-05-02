import React from 'react';
import PropTypes from "prop-types";

export default class PageTitle extends React.PureComponent {
  static defaultProps = {
    color: '#646464',
    actions:undefined
  };

  static propTypes = {
    color: PropTypes.string,
    actions: PropTypes.any,
  };

  render() {
    const { children, color, actions } = this.props;
    return (
      <h2 className='antd-x-page-title' style={{ borderLeftColor: color }}>
        {children}
        <div className='actions'>{actions}</div>
      </h2>
    );
  }
};
