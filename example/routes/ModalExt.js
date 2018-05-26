import React, {Fragment} from 'react';
import {connect} from 'dva';
import {Button} from "antd";
import {ModalView} from "../../src";
import ModalPage from "./ModalPage";


@connect()
export default class FormExt extends React.Component {
  render() {
    return (
      <Fragment>
        <Button
          onClick={() => {
            ModalView.open(ModalPage)
          }}
        >
          Open
        </Button>
      </Fragment>
    )
  }
}
