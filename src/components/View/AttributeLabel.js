import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

/**
 * DetailView 下的元素
 */
export default class AttributeLabel extends PureComponent {
  static defaultProps = {
    size: 1
  };

  static propTypes = {
    /**
     * label
     */
    label: PropTypes.any.isRequired,

    /**
     * html.title
     */
    title: PropTypes.any,

    /**
     * size 在DetailView下占据几行
     */
    size: PropTypes.number
  };

  render() {
    const { title, children, label, size } = this.props;
    const width = 100 / 4 / size;
    console.log(width);
    return (
      <div className='attribute' title={title}>
        <span className='label' style={{width:`${width}%`}}>{label}</span> {children}
      </div>
    );
  }
}
