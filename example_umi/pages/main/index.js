/* eslint-disable */

import React, { Component, Fragment } from "react";
import { connect } from "dva";

@connect(({ main }) => ({ ...main }))
export default class MainPage extends Component {
  render() {
    return <div>大大王多</div>;
  }
}
