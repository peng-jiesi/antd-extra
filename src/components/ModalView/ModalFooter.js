/**
 * ziot-space-front ModalFooter
 * Created by pengj on 2018-5-23.
 */

import React, { Component } from 'react';

/**
 * 包裹在ModalView下的footer
 *
 * ```html
 * <ModalFooter>
 *   <Button
 *     onClick={() => {
 *       this.props.modalRef.close();
 *     }}
 *   >
 *     Close
 *   </Button>
 * </ModalFooter>
 * ```
 */
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
