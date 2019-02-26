import React, { Component } from 'react';
import './App.css';
import {
  Button,
  Col,
  Container
} from 'react-bootstrap';
import { CustomModal } from './components';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      title: ""
    }
  }
  openModal = (type, title) => {
    this.setState({
      type,
      title
    });

    this.modal.handleShow();
  }

  render() {
    return (
      <Container className="App">
          <Col xs={12}>
            <Button variant="outline-success" onClick={()=>this.openModal('success', 'Success')}>Success</Button>&nbsp;
            <Button variant="outline-danger" onClick={()=>this.openModal('danger', 'Error')}>Danger</Button>&nbsp;
            <Button variant="outline-warning" onClick={()=>this.openModal('warning', 'Warning')}>Warning</Button>&nbsp;
            <Button variant="outline-info" onClick={()=>this.openModal('info', 'Info')}>Info</Button>&nbsp;
            <Button variant="outline-primary" onClick={()=>this.openModal('primary', 'Primary')}>Primary</Button>
          </Col>
          <CustomModal 
            ref={c=>this.modal=c}
            type={this.state.type}
            description={this.state.description}
            title={this.state.title}
          />
      </Container>
    );
  }
}

export default App;
