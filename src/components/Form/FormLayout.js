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
 *
 * 下级元素存在block属性时, 会展开为单行, 建议用cols=2 | 4 的时候使用
 *```html
 * <FormLayout form={form} compact={true} cols={4}>
 *   <FormField block label={"Test Label11111111111"} name={"test"} required>
 *     <Input/>
 *   </FormField>
 *   <FormField label={"Test Label22222222222"} name={"test2"} required>
 *     <Input/>
 *   </FormField>
 *   <FormField label={"Test Label22222222222"} name={"test2"} required>
 *     <Input/>
 *   </FormField>
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

  renderChildren(inner, key) {
    const { cols } = this.props;

    if (inner.props.block) {
      let ele;
      if (inner.props.labelCol) {
        ele = inner;
      } else {

        const labelSpan = Math.ceil(24 / cols / 3);
        console.log(labelSpan);
        ele = React.cloneElement(inner, {
          labelCol: { span: labelSpan },
          wrapperCol: { span: 24 - labelSpan }
        })
      }

      console.log(ele);
      return (
        <Col span={24} key={key}>
          {/*labelCol={{ span: 4 }}*/}
          {/*wrapperCol={{ span: 20 }}*/}
          {ele}
        </Col>
      );
    } else {
      return (
        <Col span={24 / cols} key={key}>
          {inner}
        </Col>
      );
    }
  }

  warpItems() {
    const { children } = this.props;

    return React.Children.map(children, (item, idx) => {


      // 如果是Col类型,直接吐出
      if (item.type.toString().indexOf('Col') !== -1) {
        return item;
      }

      // 如果是fragment包装子结点
      if (item.type === Symbol.for('react.fragment')) {
        return React.Children.map(item.props.children, (inner, idxInner) => {
          return this.renderChildren(inner, `col_${idx}_${idxInner}`);
        });
      }

      if (_.isArray(item)) {
        return item.map((inner, idxInner) => {
          return this.renderChildren(inner, `col_${idx}_${idxInner}`);
        })
      } else {
        return this.renderChildren(item, `col_${idx}`);
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
