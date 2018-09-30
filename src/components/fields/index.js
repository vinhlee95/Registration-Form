import React from 'react'

export const Input = (props) => {
  const { meta: {error, touched} } = props;
  return(
    <div className={props.className?props.className:'field'}>
      <label>{props.label}</label>
      <input type={props.type} {...props.input} />
      { 
        error
        &&
        touched
        &&
        <span style={{color: 'red'}}>{props.meta.error}</span>
      }
    </div>
  )
}


export const Select = (props) => 
  <div className='field'>
    <label>{props.label}</label>
    <select {...props.input}>
      <option value='Bachelor'>Bachelor</option>
      <option value='Master'>Master</option>
      <option value='Vocational'>Vocational</option>
    </select>
  </div>

