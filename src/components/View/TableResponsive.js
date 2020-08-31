import React, {PureComponent} from 'react';
import {Col, Row} from 'antd';
import PropTypes from "prop-types";
import _get from 'lodash/get';
import PageTitle from "../../layouts/Page/PageTitle";


/**
 */
export default class TableResponsive extends PureComponent {

  static defaultProps = {};

  static propTypes = {};

  render() {
    return (
      <div className='antd-x-table-responsive'>
        {this.props.children}
      </div>
    );
  }
}
