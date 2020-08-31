import React, {Fragment} from 'react';
import {connect} from 'dva';
import {Button} from "antd";
import {ModalView, ModalUtils} from "../../src";
import ModalPage from "./ModalPage";
import ModalForm from "./ModalForm";
import HelloPage from "./HelloPage";

@connect()
export default class FormExt extends React.Component {
  render() {
    return (
      <Fragment>
        <Button
          onClick={() => {
            ModalUtils.openModal(ModalPage,{onCancel:() => {console.log(12342);}})
          }}
        >
          Open
        </Button>

        <Button
          onClick={() => {
            ModalView.open(ModalPage, { placement: 'right', mask: false, maskClosable: false, noHover: true })
          }}
        >
          Open Right
        </Button>

        <Button
          onClick={() => {
            ModalView.open(ModalPage, { placement: 'left', noHover: true })
          }}
        >
          Open Left
        </Button>

        <Button
          onClick={() => {
            ModalView.open(ModalPage, { type: 'Drawer', noHover: true })
          }}
        >
          Open Drawer
        </Button>

        <Button
          onClick={() => {
            ModalView.open(HelloPage, { placement: 'left', noHover: true, noStore:true})
          }}
        >
          Open No Store
        </Button>


        <Button
          onClick={() => {
            ModalUtils.openFormModal(ModalForm, '测试', {
              onSubmit: (data, onClose, { initData, form }) => {
                console.log(data);
                console.log(onClose);
                },
              data: { test: 'test1', test2: 'test2' }
            })
          }}
        >
          Open Form
        </Button>

        <Button
          onClick={() => {
            ModalUtils.openFormModal(ModalForm, '测试', {
              onSubmit: (data, onClose, { initData, form }) => {
                console.log(data);
                console.log(onClose);
                },
              data: { test: 'test1', test2: 'test2' }
            },{noFooter:true})
          }}
        >
          Open Form No Footer
        </Button>
      </Fragment>
    )
  }
}
