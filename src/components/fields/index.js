import React from 'react'

export const Input = (props) => {
  return(
    <div className={props.className?props.className:'field'}>
      <label>{props.label}</label>
      <input type={props.type} {...props.input} />
      { 
        props.meta.error
        &&
        props.meta.touched
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
      <option value='Lamborghini'>Lamborghini</option>
      <option value='Ferrari'>Ferrari</option>
    </select>
  </div>

