import React, { Component } from 'react';
import Form from './Form';
import './App.css';

class App extends Component {

  // set initial value
  getInitialValues = () => {
    return {
      firstName: '',
      lastName: '',
      newsletter: true
    }
  }


  submit = (values) => {
    console.log(values)
  }

  render() {
    return (
      <div className="App">
        <h1>Registration</h1>
        <Form
          initialValues={this.getInitialValues()}
          onSubmit={this.submit}
        />
      </div>
    );
  }
}

export default App;
