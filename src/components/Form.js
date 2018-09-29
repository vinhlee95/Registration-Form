import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input, Select } from './fields';
import { required, minPassLength, matchPassword } from '../validation';

class Form extends Component {

  submit = (values) => {
    console.log(values)
  };

  render() { 
    return (
      <form onSubmit={this.submit}>
        <Field 
          name='firstName'
          component={Input}
          type='text'
          label='First name'
          validate={[required]}
        />

        <Field 
          name='lastName'
          component={Input}
          type='text'
          label='Last Name'
          validate={[required]}
        />

        <Field 
          name='password'
          component={Input}
          type='password'
          label='Password'
          validate={[required, minPassLength]}
        />

        <Field 
          name='confirmPassword'
          component={Input}
          type='text'
          label='Confirm password'
          validate={[required, matchPassword]}
        />
       
        <Field
          name='brand'
          component={Select}
          label='Brand'
        />

        <Field 
          name='newsletter'
          component={Input}
          type='checkbox'
          label='Subscribe '
          className='field checkbox'
        />

        <button type='submit'>Sign up</button>
      </form>
    )
  }
}

Form = reduxForm({
  form: 'register',
})(Form);

export default Form;
