import React from 'react';
import PropTypes from "prop-types";


/**
 * 页面标题
 *```html
 *  <PageTitle color={'#000000'} actions={<Button>测试</Button>}>这是一个标题</PageTitle>
 *```
 */
export default class PageTitle extends React.PureComponent {
  static defaultProps = {
    color: '#646464',
    size: ''
  };

  static propTypes = {
    /**
     * 竖条颜色
     */
    color: PropTypes.string,
    /**
     * 操作区域
     */
    actions: PropTypes.any,

    /**
     * 尺寸  可用 small
     */
    size: PropTypes.string
  };

  render() {
    const { children, color, actions,size } = this.props;
    
    return (
      <h2 className={`antd-x-page-title ${size}`} style={{ borderLeftColor: color }}>
        {children}
        <div className='actions'>{actions}</div>
      </h2>
    );
  }
};
