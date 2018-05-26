/**
 * FormLayout
 * Created by pengj on 2018-4-29.
 */
import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from 'antd';
import _ from 'lodash';

export default class FormLayout extends React.PureComponent {
  static defaultProps = {
    cols: 1,
    compact: false,
    gutter: 8,
  };

  static propTypes = {
    form: PropTypes.any.isRequired,
    cols: PropTypes.number,
    compact: PropTypes.bool,
    gutter: PropTypes.number,
  };

  static childContextTypes = {
    form: PropTypes.any,
  };

  getChildContext() {
    return { form: this.props.form }
  }

  warpItems() {
    const { cols, children } = this.props;
    const span = 24 / cols;

    return React.Children.map(children, (item, idx) => {

      if (item.type === Symbol.for('react.fragment')) {
        return React.Children.map(item.props.children, (inner, idxInner) => {
          return (
            <Col span={span} key={`col_${idx}_${idxInner}`}>
              {inner}
            </Col>
          )
        });
      }

      if (_.isArray(item)) {
        return item.map((inner, idxInner) => {
          return (
            <Col span={span} key={`col_${idx}_${idxInner}`}>
              {inner}
            </Col>
          )
        })
      } else {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <Col span={span} key={`col_${idx}`}>
            {item}
          </Col>
        );
      }
    })
  }


  render() {
    const { cols, children, compact, gutter } = this.props;
    const className = compact ? 'antd-x-compact-form antd-x-form' : 'antd-x-form';
    let items;
    if (cols === 1) {
      items = children;
    } else {
      items = this.warpItems();
    }

    return (
      <div className={className}>
        <Row gutter={gutter}>
          {items}
        </Row>
      </div>
    )
  }
}
