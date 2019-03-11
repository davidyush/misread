import React from 'react';
import { createPortal } from 'react-dom';

const Modal = (props) => {
  return createPortal(
    <div className='modal'>
      <button className='form-close' onClick={props.close}>close</button>
      {props.children}
    </div>, document.getElementById('modal-sign')
  );
}

export default Modal;