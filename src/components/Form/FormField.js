/* eslint-disable react/require-default-props */
/**
 * FormField
 * Created by pengj on 2018-4-29.
 */
import React, {Component} from 'react';
import {Col, Form, Row} from 'antd';
import PropTypes from 'prop-types';

const DefaultModelFormLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

export default class FormField extends Component {
  static defaultProps = {};

  static propTypes = {
    form: PropTypes.any,
    required: PropTypes.any,
    label: PropTypes.any,
    help: PropTypes.any,
    action: PropTypes.any,
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
      itemRules.unshift({ required: true, message: `${label} is required` });
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
