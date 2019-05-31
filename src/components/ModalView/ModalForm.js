import React, {Component, createElement, Fragment} from 'react';
import {Button, Form} from 'antd';
import ModalFooter from './ModalFooter';

class ModalFormWarp extends Component {
  onOk = () => {
    const { form, onSubmit, data } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        onSubmit(values, this.props.modalRef.close, { initData: data, form });
      }
    });
  };
  onCancel = () => {
    this.props.modalRef.close();
  };

  renderFooter() {
    if (this.props.noFooter) {
      return null;
    } else {
      return (
        <ModalFooter>
          <Button type="primary" onClick={this.onOk}>确定</Button>
          <Button type="primary" onClick={this.onCancel}>取消</Button>
        </ModalFooter>
      )
    }

  }


  //todo 只传递部分参数
  render() {
    const { content } = this.props;
    return (
      <Fragment>
        {createElement(content, { ...this.props })}
        {this.renderFooter()}
      </Fragment>
    );
  }
}

const ModalForm = Form.create()(ModalFormWarp);
export default ModalForm;
