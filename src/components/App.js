import React, { Component } from 'react';
import Form from './Form';
import Modal from './Modal/Modal';
import './App.css';

class App extends Component {
  state = { values: null,showModal: false }

  // set initial value
  getInitialValues = () => {
    return {
      firstName: 'Vinh',
      lastName: 'Le',
      email: 'lethanhvinh95@gmail.com',
      password: 'supercrv95',
      confirmPassword: 'supercrv95',
      newsletter: true
    }
  }


  submit = (values) => {
    this.setState({ values, showModal: true });
  }

  closeModal = () => this.setState({ showModal: false });

  render() {
    console.log(this.state.values);
    const { values } = this.state;
    return (
      <div className="App">
        <h1>Registration</h1>
        <Form
          initialValues={this.getInitialValues()}
          onSubmit={this.submit}
        />
        <Modal 
          show={this.state.showModal}
          closeModal={this.closeModal}>
          <div>
            <h1>Thanks for signing up!</h1>
            {
              values
              &&
              <p>Hi {values.firstName}! We will contact you soon via your email.</p>
            }
            <button onClick={this.closeModal}>OK</button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default App;
