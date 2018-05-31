/* eslint-disable react/require-default-props */
/**
 * FormField
 * Created by pengj on 2018-4-29.
 */
import React, {Component} from 'react';
import {Col, Form, Row} from 'antd';
import PropTypes from 'prop-types';

const DefaultModelFormLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/**
 * 包装form.getFieldDecorator  和 From.Item
 */
export default class FormField extends Component {
  static defaultProps = {};

  static propTypes = {
    /**
     * Form.create()包装后的 props.form,  如果包裹在FormLayout 或者提供 context.form组件下, 可以不传
     */
    form: PropTypes.any,
    /**
     * 是否必填, 默认提示为 ${label}必须填写
     */
    required: PropTypes.any,
    /**
     *  Form.Item  label
     */
    label: PropTypes.any,
    /**
     * Form.Item  help
     */
    help: PropTypes.any,
    /**
     * Form.Item  rules
     */
    rules:PropTypes.array,

    /**
     * 在Form.Item 对象布局后提供一个action区
     */
    action: PropTypes.element,

  };

  static contextTypes = {
    form: PropTypes.any,
  };


  renderChildren() {
    const { name, action, children, form, initialValue, label, rules, required } = this.props;

    const _form = form || this.context.form;

    if (!_form) {
      throw new Error(`must assign [form] in context or props`);
    }

    const { getFieldDecorator } = _form;

    const itemRules = rules || [];
    if (required) {
      itemRules.unshift({ required: true, message: `${label}必须填写` });
    }

    const fieldName = name;
    const filed = getFieldDecorator(fieldName, {
      rules: itemRules,
      initialValue,
    })(children);

    // 如果没有action直接返回
    if (!action) {
      return filed;
    }

    // 有action 做一层包装
    return (
      <Row gutter={4}>
        <Col span={20}>
          {filed}
        </Col>
        <Col span={4}>{action}</Col>
      </Row>
    );
  }

  render() {
    const { required, label, help, hasFeedback } = this.props;
    return (
      <Form.Item label={label} {...DefaultModelFormLayout} required={required} help={help} hasFeedback={hasFeedback}>
        {this.renderChildren()}
      </Form.Item>
    );
  }
}
