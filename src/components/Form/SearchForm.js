/**
 * SearchForm
 * Created by pengj on 2018-4-29.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Button, Col, Form, Icon} from 'antd';
import isFunction from 'lodash/isFunction';
import isArray from 'lodash/isArray';
import styles from './SearchForm.less';
import FormLayout from './FormLayout';

class SearchForm extends React.PureComponent {

  static defaultProps = {
    min: 999,
    queryText: '查询',
    resetText: '清除',
    extendText: '更多',
  };

  static propTypes = {
    onSearch: PropTypes.func.isRequired,
    min: PropTypes.number,
    queryText: PropTypes.string,
    resetText: PropTypes.string,
    extendText: PropTypes.string,
    form: PropTypes.any.isRequired,
  };

  static contextTypes = {
    form: PropTypes.any,
  };


  constructor(props, context) {
    super(props, context);
    this.form = this.props.form || this.context.form;
    if (!this.form) {
      console.warn('must assign [form] in context or props');
    }

    this.state = {
      expand: false,
    };
  }

  handleSearch() {
    const { onSearch } = this.props;
    if (!isFunction(onSearch)) {
      console.warn('onSearch must be function');
    } else {
      onSearch(this.form.getFieldsValue());
    }
  }

  handleReset() {
    this.form.resetFields();
    this.handleSearch();
  }

  toggle() {
    const { state: { expand }, form } = this;
    const nextExpand = !expand;
    if (!nextExpand) {
      form.resetFields();
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
    return showItem.map((item, idx) => {
      return (
        // eslint-disable-next-line react/no-array-index-key
        <Col span={8} key={`col_${idx}`}>
          {item}
        </Col>
      );
    });
  }

  renderExtend(expand) {
    const { children, extendText, min } = this.props;
    if (children.length > min) {
      return (
        <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle.bind(this)}>
          {extendText} <Icon type={expand ? 'up' : 'down'} />
        </a>
      );
    }
  }

  render() {
    const { expand } = this.state;
    const { queryText, resetText } = this.props;
    return (
      <Form className={styles.searchForm}>
        <FormLayout form={this.form}>
          {this.renderItems()}
          <Col style={{ textAlign: 'right', paddingBottom: '12px' }}>
            <Button type='primary' onClick={this.handleSearch.bind(this)}>{queryText}</Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset.bind(this)}>{resetText}</Button>
            {this.renderExtend(expand)}
          </Col>
        </FormLayout>
      </Form>
    );
  }
}

export default SearchForm;
