import React, { Fragment } from "react";
import { connect } from "dva";
import { Button } from "antd";
import { ModalOpener } from "../../../lib";
import ModalPage from "./components/ModalPage";
import ModalForm from "./components/ModalForm";
import HelloPage from "./components/HelloPage";

const delay = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms));

@connect()
export default class ModalExt extends React.Component {
  render() {
    console.log("props", this.props);

    const modelRef = React.createRef();
    return (
      <Fragment>
        <ModalOpener
          content={ModalPage}
          title="ModalPage"
          custProps={{
            a: 1,
            b: 2,
          }}
        >
          <Button>Open Component</Button>
        </ModalOpener>

        <ModalOpener
          content={ModalPage}
          title="ModalPage"
          custProps={{
            a: 1,
            b: 2,
          }}
          onOpen={async () => {
            await delay(2000);
          }}
        >
          <Button>Open Component delay 2S</Button>
        </ModalOpener>

        <ModalOpener
          content={ModalPage}
          title="Page with action"
          data={{ test: "test1", test2: "test2" }}
          onOk={async (e, onClose) => {
            await delay(1000);
            onClose();
            await delay(1000);
            console.log("on ok noForm");
          }}
        >
          <Button>open with action</Button>
        </ModalOpener>
        <br />
        <ModalOpener
          ref={modelRef}
          content={ModalForm}
          title="Modal with form"
          data={{ test: "test1", test2: "test2" }}
          onOk={async (data, onClose, { initData, form }) => {
            console.log(data);
            await delay(1000);
            onClose();
          }}
        >
          <Button>Open Form Component</Button>
        </ModalOpener>

        <Button
          onClick={() => {
            modelRef.current.close();
          }}
          style={{ zIndex: 10000 }}
        >
          Ref Close
        </Button>
      </Fragment>
    );
  }
}
