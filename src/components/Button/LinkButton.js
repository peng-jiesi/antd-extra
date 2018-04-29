import React, {PureComponent} from 'react';
import {Button} from 'antd';
import styles from './Button.less';

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
      <Button ghost size="small" type="primary" className={styles.linkButton} {...this.props}>
        {this.props.children}
      </Button>
    );
  }
}
