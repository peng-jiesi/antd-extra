import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class AttributeLabel extends PureComponent {
  static defaultProps = {
    cols: 4,
    gutter: 8,
  };

  static propTypes = {
    label: PropTypes.any.isRequired,
    cols: PropTypes.number,
    gutter: PropTypes.number,
  };
  
  render() {
    const {title,children,label} = this.props;

    return (
      <div className='attribute' title={title}>
        <span className='label'>{label}</span> {children}
      </div>
    );
  }
}
