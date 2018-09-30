import React from 'react';
import './Modal.css';

export default (props) => {
  const { show, className, closeModal } = props;
  return(
    <div 
      className={show?'modal modal-show':'modal modal-hide'} 
      onClick={closeModal}>
      <div 
        className={className?className:'content'}
        onClick={e => e.stopPropagation()}>
        {props.children}
      </div>
    </div>
  )
}

