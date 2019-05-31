import React, {PureComponent, Fragment} from 'react';
import {Button, Divider} from 'antd';

/**
 * Table中的Button
 * ```html
 * <LinkButton onClick={}>删除</LinkButton>
 * ```
 */
export default class DividerGroup extends PureComponent {
  static defaultProps = {};

  static propTypes = {
    // confirm: PropTypes.any,
    // okText: PropTypes.any,
    // cancelText: PropTypes.any,
  };

  renderChildren() {
    const { children } = this.props;
    const items = [];
    React.Children.map(children, (item, idx) => {
      items.push(item);
      items.push(<Divider type="vertical"/>)
    })

    // 去掉最后一个Divider
    items.pop()
    return items;
  }

  render() {
    const { children } = this.props;
    const childrenCount = React.Children.count(children);
    if (childrenCount > 1) {
      return (
        <Fragment>
          {this.renderChildren()}
        </Fragment>
      );
    } else {
      return children;
    }
  }
}
