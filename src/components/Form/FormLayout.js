/**
 * FormLayout
 * Created by pengj on 2018-4-29.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from 'antd';
import _ from 'lodash';

/**
 * 表单局部组件, 用于提供多行布局表单
 *
 * 直接放入FormField
 *```html
 * <FormLayout form={form} compact={true} cols={4}>
 *   <FormField
 *   label={"Test Label1111111111111"}
 *   name={"test"}
 *   required
 *   >
 *      <Input/>
 *   </FormField>
 * </FormLayout>
 * ```
 *
 * 放入Fragment包裹的元素, 会被展开
 *```html
 * <FormLayout form={form} compact={true} cols={4}>
 *    <Fragment></Fragment>
 * </FormLayout>
 * ```
 */
export default class FormLayout extends React.PureComponent {
  static defaultProps = {
    cols: 1,
    compact: false,
    gutter: 8,
  };

  static propTypes = {
    /**
     * Form.create()包装后的 props.form
     */
    form: PropTypes.any.isRequired,

    /**
     * 布局展示几行
     */
    cols: PropTypes.number,

    /**
     * 是否紧缩布局
     */
    compact: PropTypes.bool,

    /**
     * Row  gutter
     */
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
