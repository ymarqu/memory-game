import React, { Component } from 'react';

class Card extends Component{

    render(){

        let { url, handleClick, clicked, index } = this.props;

        return(
            <div className='card'>
                <img height="200" width="200" onClick={handleClick} src={url} alt="cat" data-clicked={clicked} data-index={index}/>
            </div>
        )
    }
}

export default Card;
