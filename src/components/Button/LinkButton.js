import React, {PureComponent} from 'react';
import {Button} from 'antd';

/**
 * Table中的Button
 * ```html
 * <LinkButton onClick={}>删除</LinkButton>
 * ```
 */
export default class LinkButton extends PureComponent {
  static defaultProps = {};

  static propTypes = {
    // confirm: PropTypes.any,
    // okText: PropTypes.any,
    // cancelText: PropTypes.any,
  };

  render() {
    const { confirm, okText, cancelText } = this.props;
    return (
      <Button ghost size="small" type="primary" className='antd-x-link-button' {...this.props}>
        {this.props.children}
      </Button>
    );
  }
}
