import React, { Component } from 'react';


class ScoreBoard extends Component{

    render(){

        let { score } = this.props;

        return(
            <div className="score-board">
                <p>{score}</p>
            </div>
        )
    }
}

export default ScoreBoard;
