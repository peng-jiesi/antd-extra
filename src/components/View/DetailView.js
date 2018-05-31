import React, {PureComponent} from 'react';
import {Col, Row} from 'antd';
import PropTypes from "prop-types";
import _get from 'lodash/get';
import PageTitle from "../../layouts/Page/PageTitle";



/**
 * 信息展示视图, 通过key value模式展示, 提供布局能力
 *
 * ```html
 * <DetailView title={'详情展示'}>
 *   <AttributeLabel label={'测试'}>123123123123</AttributeLabel>
 *   <Fragment>
 *     <AttributeLabel label={'测试'} size={2}>xxxxxxxxxxxxxxxx</AttributeLabel>
 *     <AttributeLabel label={'测试'}>123123123123</AttributeLabel>
 *     <AttributeLabel label={'测试'} size={4}>123123123123</AttributeLabel>
 *   </Fragment>
 * </DetailView>
 * ```
 */
export default class DetailView extends PureComponent {
  static defaultProps = {
    cols: 4,
    gutter: 8,
  };

  static propTypes = {
    /**
     * 详情标题, 如果没有不展示头
     */
    title: PropTypes.any,

    /**
     * 布局行数
     */
    cols: PropTypes.number,

    /**
     * Row gutter 见:PageTitle  gutter
     */
    gutter: PropTypes.number,

    /**
     * 标题头的颜色 见:PageTitle color
     */
    color: PropTypes.string,

    /**
     * 标题操作 见:PageTitle actions
     */
    actions: PropTypes.any,
  };

  constructor(props) {
    super(props);
    this.keyIdx = 1;
  }

  renderCol(ele) {
    const { cols } = this.props;
    const eleColSpan = _get(ele,'props.size', 1);
    const colSpan = 24 / cols * eleColSpan;
    return (
      <Col span={colSpan} key={`col_${ this.keyIdx++ }`}>
        {ele}
      </Col>
    );
  }

  warpLayout() {
    const { children = [], gutter } = this.props;
    const colEles = React.Children.map(children, (ele) => {
      if (ele.type === Symbol.for('react.fragment')) {
        return React.Children.map(ele.props.children, (inner) => {
          return this.renderCol(inner);
        });
      } else {
        return this.renderCol(ele);
      }
    });
    return (
      <Row gutter={0} className={'content'}>
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
