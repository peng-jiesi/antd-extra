import React, {Fragment} from 'react';
import {connect} from 'dva';
import {PageTitle, DetailView, AttributeLabel} from "../../src";
import {Button} from "antd";

@connect()
export default class PageExt extends React.Component {
  render() {
    return (
      <div style={{ padding: '24px' }}>
        <PageTitle color={'#000000'} actions={<Button>测试</Button>}>这是一个标题</PageTitle>
        <DetailView title={'详情展示'} titleSize={'small'}>
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
            <AttributeLabel label={'测试'} size={2}>xxxxxxxxxxxxxxxx</AttributeLabel>
            <AttributeLabel label={'测试'}>123123123123</AttributeLabel>
            <AttributeLabel label={'测试'} size={4}>123123123123</AttributeLabel>
          </Fragment>
        </DetailView>
      </div>
    )
  }
}
