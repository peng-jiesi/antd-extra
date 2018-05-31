import React, {Fragment} from 'react';
import {connect} from 'dva';
import {PageTitle, DetailView, AttributeLabel} from "../../src";

@connect()
export default class PageExt extends React.Component {
  render() {
    return (
      <div style={{ padding: '24px' }}>
        <PageTitle color={'#000000'}>这是一个标题</PageTitle>

        <DetailView title={'详情展示'}>
          <AttributeLabel label={'测试'}>123123123123</AttributeLabel>
          <AttributeLabel label={'测试'}>123123123123</AttributeLabel>
          <AttributeLabel label={'测试'}>123123123123</AttributeLabel>
          <AttributeLabel label={'测试'}>123123123123</AttributeLabel>
        </DetailView>
        <DetailView title={'详情展示'}>
          <AttributeLabel label={'测试'}>123123123123</AttributeLabel>
        </DetailView>

        <DetailView title={'详情展示'}>
          <AttributeLabel label={'测试'}>123123123123</AttributeLabel>
          <Fragment>
            <AttributeLabel label={'测试'}>123123123123</AttributeLabel>
            <AttributeLabel label={'测试'}>123123123123</AttributeLabel>
            <AttributeLabel label={'测试'}>123123123123</AttributeLabel>
          </Fragment>
        </DetailView>
      </div>
    )
  }
}
