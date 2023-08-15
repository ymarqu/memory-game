import React, { Component } from 'react';
import '../css/modal.css'

class Modal extends Component{


    render(){

        let { handleClick, directions, title } = this.props;

        return(
            <div className='modal'>
                <p className='title'>{title}</p>
                <p className='directions'>{directions}</p>
                <button className="btn" onClick={handleClick}>Start</button>
            </div>
        )
    }
}

export default Modal;
