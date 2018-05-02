import React, {PureComponent} from 'react';
import {Col, Row} from 'antd';
import PropTypes from "prop-types";
import PageTitle from "../../layouts/Page/PageTitle";

export default class DetailView extends PureComponent {
  static defaultProps = {
    cols: 4,
    gutter: 8,
    color: undefined,
    actions: undefined
  };

  static propTypes = {
    title: PropTypes.any.isRequired,
    cols: PropTypes.number,
    gutter: PropTypes.number,
    color: PropTypes.string,
    actions: PropTypes.any,
  };

  warpLayout() {
    const { children = [], cols, gutter } = this.props;
    const colSpan = 24 / cols;
    const colEles = children.map((ele, idx) => {
      return <Col key={`key_${idx}`} span={colSpan}> {ele} </Col>;
    });
    return (
      <Row gutter={gutter} className={'content'}>
        {colEles}
      </Row>
    )
  }

  render() {
    const { title, color, actions } = this.props;

    return (
      <div className='antd-x-detail-view'>
        <PageTitle {...{ color, actions }}>{title}</PageTitle>
        {this.warpLayout()}
      </div>
    );
  }
}
