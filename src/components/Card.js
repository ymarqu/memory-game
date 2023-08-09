import React, { Component } from 'react';

class Card extends Component{

    render(){

        let { url, handleClick } = this.props;

        return(
            <div className='card'>
                <img onClick={handleClick} height="300" width="300" src={url} alt="cat" data-clicked="false"/>
            </div>
        )
    }
}

export default Card;
