import React, {Fragment} from 'react';
import {connect} from 'dva';
import {Button} from "antd";
import {ModalView, ModalUtils} from "../../src";
import ModalPage from "./ModalPage";
import ModalForm from "./ModalForm";


@connect()
export default class FormExt extends React.Component {
  render() {
    return (
      <Fragment>
        <Button
          onClick={() => {
            ModalUtils.openModal(ModalPage)
          }}
        >
          Open
        </Button>

        <Button
          onClick={() => {
            ModalView.open(ModalPage, { place: 'right', mask: false, maskClosable: false, noHover: true })
          }}
        >
          Open Righta
        </Button>

        <Button
          onClick={() => {
            ModalView.open(ModalPage, { place: 'left', noHover: true })
          }}
        >
          Open Left
        </Button>


        <Button
          onClick={() => {
            ModalView.open4Form(ModalForm, '测试', {
              onSubmit: (data, onClose, { initData, form }) => {console.log(data), console.log(onClose);},
              data: { test: 'test1', test2: 'test2' }
            })
          }}
        >
          Open Form
        </Button>
      </Fragment>
    )
  }
}
