import React, {Fragment} from 'react';
import {connect} from 'dva';
import {PageTitle, DetailView, AttributeLabel,ModalFooter} from "../../src";
import {Button} from "antd";

@connect()
export default class ModalForm extends React.Component {


  render() {
    return (
      <Fragment>
        <DetailView title={'详情展示'}>
          <AttributeLabel label={'测试'}>123123123123</AttributeLabel>
          <AttributeLabel label={'测试'}>123123123123</AttributeLabel>
          <AttributeLabel label={'测试'}>123123123123</AttributeLabel>
          <AttributeLabel label={'测试'}>123123123123</AttributeLabel>
        </DetailView>

        <ModalFooter>
          <Button
            onClick={() => {
              this.props.modalRef.close();
            }}
          >
            Close
          </Button>
        </ModalFooter>
      </Fragment>
    )
  }
}
