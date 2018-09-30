import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input, Select } from './fields';
import { required, minPassLength, matchPassword, email } from '../validation';

const Form = (props) => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
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
        name='email'
        component={Input}
        type='email'
        label='Email'
        validate={[required, email]}
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
        label='Education level'
      />

      <Field 
        name='newsletter'
        component={Input}
        type='checkbox'
        label='Subscribe to our newsletter.'
        className='field checkbox'
      />

      <button type='submit' className={pristine || submitting ? 'disabled' : '' }>Sign up</button>
    </form>
  )
}

export default reduxForm({
  form: 'sandbox'
})(Form);
