import React, { Component } from 'react';
import Form from './Form';
import './App.css';

class App extends Component {

  getInitialValues = () => {
    return {
      firstName: '',
      lastName: '',
      newsletter: true
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Form</h1>
        <Form
          initialValues={this.getInitialValues()}
        />
      </div>
    );
  }
}

export default App;
