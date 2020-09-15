/**
 * SearchForm
 * Created by pengj on 2018-4-29.
 */
import React from "react";
import PropTypes from "prop-types";
import { Button, Col, Form, Icon } from "antd";
import isFunction from "lodash/isFunction";
import isArray from "lodash/isArray";
import {
  UpSquareOutlined,
  DownSquareOutlined,
  SearchOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import FormLayout from "./FormLayout";

/**
 * 自动布局查询表单,  可以通过min调整, 提供高级搜索能力
 *
 */
export default class SearchForm extends React.PureComponent {
  static defaultProps = {
    min: 999,
    queryText: "查询",
    resetText: "清除",
    expandText: "更多条件",
    collapseText: "简化条件",
    compact: true,
    cols: 3,
  };

  constructor(props, context) {
    super(props, context);
    this.formRef = React.createRef();

    // if (!this.form) {
    //   console.warn("props.form must be return from  Form.useForm");
    // }

    this.state = {
      expand: false,
    };
  }

  invokeSearch(action) {
    const { onSearch } = this.props;

    if (!isFunction(onSearch)) {
      console.warn("onSearch must be function");
    } else {
      onSearch(this.formRef.current.getFieldsValue(), { action });
    }
  }

  handleSearch() {
    this.invokeSearch("SEARCH");
  }

  handleReset() {
    this.formRef.current.resetFields();

    const { onReset } = this.props;
    if (isFunction(onReset)) {
      onReset();
    }

    this.invokeSearch("RESET");
  }

  toggle() {
    const {
      state: { expand },
    } = this;

    const nextExpand = !expand;
    if (!nextExpand) {
      this.formRef.current.resetFields();
    }

    this.setState({ expand: nextExpand });
  }

  renderItems() {
    const { expand } = this.state;
    let { children } = this.props;
    if (!isArray(children)) {
      children = [children];
    }

    let showItem = [];
    if (expand) {
      showItem = children;
    } else {
      showItem = children.slice(0, this.props.min);
    }

    return showItem;
  }

  renderExtend(expand) {
    const { children, extendText, min, expandText, collapseText } = this.props;

    const text = expand ? collapseText : extendText || expandText;

    if (children.length > min) {
      const icon = expand ? <UpSquareOutlined /> : <DownSquareOutlined />;

      return (
        <a className="expand" onClick={this.toggle.bind(this)}>
          {text} {icon}
        </a>
      );
    }
  }

  render() {
    const { expand } = this.state;
    const {
      queryText,
      resetText,
      cols,
      compact,
      gutter,
      actions,
      style,
    } = this.props;

    return (
      <Form className="antd-x-search-form" style={style} ref={this.formRef}>
        <FormLayout cols={cols} compact={compact} gutter={gutter}>
          {this.renderItems()}
          <Col className="actions" nowarp={true}>
            {this.renderExtend(expand)}
            <Button
              type="primary"
              icon={<SearchOutlined />}
              onClick={this.handleSearch.bind(this)}
            >
              {queryText}
            </Button>
            <Button
              icon={<ReloadOutlined />}
              onClick={this.handleReset.bind(this)}
            >
              {resetText}
            </Button>
            {actions}
          </Col>
        </FormLayout>
      </Form>
    );
  }
}

SearchForm.propTypes = {
  /**
   * 查询函数   (values,event:{action}) => {}, event.action 触发动作 查询(SEARCH)或者重置(RESET)
   */
  onSearch: PropTypes.func.isRequired,

  /**
   * 点击重置后触发,  会在onSearch之前执行,    重置会触发一次onSearch(空值)
   */
  onReset: PropTypes.func,

  /**
   * 精简模式下展示多少条件
   */
  min: PropTypes.number,

  /**
   * 查询按钮文字
   */
  queryText: PropTypes.string,

  /**
   * 重置按钮文字
   */
  resetText: PropTypes.string,

  /**
   * 展开按钮文字
   */
  expandText: PropTypes.string,

  /**
   * 收缩按钮文字
   */
  collapseText: PropTypes.string,

  /**
   * 布局展示几行  FormLayout cols
   */
  cols: PropTypes.number,

  /**
   * 是否紧缩布局   FormLayout compact
   */
  compact: PropTypes.bool,

  /**
   * FormLayout gutter
   */
  gutter: PropTypes.number,

  /**
   * 放置在查询按钮后的 扩展按钮
   */
  actions: PropTypes.any,

  /**
   * style
   */
  style: PropTypes.any,
};
