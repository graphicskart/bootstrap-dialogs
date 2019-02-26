import React, { Component } from 'react';
import {
    Modal,
    Button
} from 'react-bootstrap';

export default class CustomModal extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.state = {
        show: false,
      };
    }
  
    handleClose = () => {
      this.setState({ show: false });
    }
  
    handleShow = () => {
      this.setState({ show: true });
    }
  
    render() {
      return (
        <React.Fragment>
          <Modal show={this.state.show} onHide={this.handleClose} className={this.props.type} size="lg">
            <Modal.Header closeButton>
              <Modal.Title>{this.props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{this.props.description}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant={this.props.type} onClick={this.handleClose}>
                Ok
              </Button>
            </Modal.Footer>
          </Modal>
        </React.Fragment>
      );
    }
  }