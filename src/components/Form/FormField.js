/* eslint-disable react/require-default-props */
/**
 * FormField
 * Created by pengj on 2018-4-29.
 */
import React, { Component } from "react";
import { Col, Form, Row } from "antd";
import PropTypes from "prop-types";
import _omit from "lodash/omit";

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
    rules: PropTypes.array,
    /**
     * getFieldDecorator, options.valuePropName
     */
    valuePropName: PropTypes.any,

    /**
     * 在Form.Item 对象布局后提供一个action区
     */
    action: PropTypes.element,

    /**
     * 是否占整行,  必须在FormLayout下面才有用,  建议在FormLayout.cols = 2  4 的时候使用,  3 会有偏移
     */
    block: PropTypes.bool,
  };

  renderChildren() {
    const { action, children } = this.props;

    // 如果没有action直接返回
    if (!action) {
      return children;
    }

    // 有action 做一层包装
    return (
      <Row gutter={4}>
        <Col span={20}>{children}</Col>
        <Col span={4}>{action}</Col>
      </Row>
    );
  }

  filloutRules() {
    const { required, rules, label = "" } = this.props;
    const itemRules = rules || [];
    if (required) {
      itemRules.unshift({ required: true, message: `${label}必须填写` });
    }
    return itemRules;
  }

  render() {
    const omitProps = _omit(this.props, ["rules", "action", "block"]);
    const rules = this.filloutRules();
    const props = {
      ...DefaultModelFormLayout,
      ...omitProps,
      rules,
    };

    return <Form.Item {...props}>{this.renderChildren()}</Form.Item>;
  }
}
