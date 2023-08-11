import React, { Component } from 'react';
import '../css/modal.css'

class Modal extends Component{


    render(){

        let { handleClick } = this.props;

        return(
            <div className='modal'>
                <p>Welcome to MemeMinder: The LOL Memory Game</p>
                <p>Press button to start</p>
                <button onClick={handleClick}>Start</button>
            </div>
        )
    }
}

export default Modal;
