import React, { Component } from 'react';
import Card from '../components/Card';
import '../css/cardContainer.css'

class CardContainer extends Component{

    render(){
        let { cards, handleClick } = this.props;

        let cardComps = cards.map((card,index) => {
            return <Card handleClick={handleClick} key={index} url={card.images.original.url} />
        })

        return(
            <div className='card-container'>
                {cardComps}
            </div>
        )
    }
}

export default CardContainer;
