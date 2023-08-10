import React, { Component } from 'react';
import '../App.css'

class ScoreBoard extends Component{

    render(){

        let { score, highScore } = this.props;

        return(
            <div className="score-board">
                <div>
                    <h1>MemeMinder: The LOL Memory Game</h1>
                </div>
                <div className="score">
                <p>Current Score:{score}</p>
                <p>High Score: {highScore}</p>
                </div>
            </div>
        )
    }
}

export default ScoreBoard;
