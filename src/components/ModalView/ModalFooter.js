/**
 * ziot-space-front ModalFooter
 * Created by pengj on 2018-5-23.
 */

import React, { Component } from 'react';

export default class ModalFooter extends Component {
  render() {
    return (
      <div  className="modal-footer" >
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
