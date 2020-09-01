import React, { Fragment, forwardRef } from "react";
import { DetailView, AttributeLabel, ModalOpener } from "../../../../lib";
import { Button } from "antd";
import { connect } from "dva";
import ModalForm from "./ModalForm";

@connect()
export default class ModalPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("props", this.props);
    return (
      <Fragment>
        {" "}
        <ModalOpener
          width={800}
          content={ModalForm}
          title="ModalPage"
          custProps={{
            a: 1,
            b: 2,
          }}
          onOk={async (data, onClose, { initData, form }) => {
            console.log(data);
            await this.props.dispatch({
              type: "example/fetch",
              payload: {
                ...data,
              },
            });
            onClose();
          }}
        >
          <Button>Open Component</Button>
        </ModalOpener>
        <DetailView title={"详情展示"} ref={this.props.forwardRef}>
          <AttributeLabel label={"测试"}>123123123123</AttributeLabel>
          <AttributeLabel label={"测试"}>123123123123</AttributeLabel>
          <AttributeLabel label={"测试"}>123123123123</AttributeLabel>
          <AttributeLabel label={"测试"}></AttributeLabel>
        </DetailView>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
      </Fragment>
    );
  }
}
