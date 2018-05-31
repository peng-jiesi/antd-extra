import React, {PureComponent} from 'react';
import {Col, Row} from 'antd';
import PropTypes from "prop-types";
import PageTitle from "../../layouts/Page/PageTitle";

export default class DetailView extends PureComponent {
  static defaultProps = {
    cols: 4,
    gutter: 8,
    title: undefined,
    color: undefined,
    actions: undefined
  };

  static propTypes = {
    title: PropTypes.any,
    cols: PropTypes.number,
    gutter: PropTypes.number,
    color: PropTypes.string,
    actions: PropTypes.any,
  };

  warpLayout() {
    const { children = [], cols, gutter } = this.props;
    const colSpan = 24 / cols;
    const colEles = React.Children.map(children, (ele, idx) => {
      if (ele.type === Symbol.for('react.fragment')) {
        return React.Children.map(ele.props.children, (inner, idxInner) => {
          return (
            <Col span={colSpan} key={`col_${idx}_${idxInner}`}>
              {inner}
            </Col>
          )
        });
      } else {
        return <Col key={`key_${idx}`} span={colSpan}> {ele} </Col>;
      }
    });
    return (
      <Row gutter={gutter} className={'content'}>
        {colEles}
      </Row>
    )
  }

  render() {
    const { title, color, actions } = this.props;
    const header = title ? <PageTitle {...{ color, actions }}>{title}</PageTitle> : null;
    return (
      <div className='antd-x-detail-view'>
        {header}
        {this.warpLayout()}
      </div>
    );
  }
}
