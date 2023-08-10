import React, { Component } from 'react';
import CardContainer from './components/CardContainer';
import ScoreBoard from './components/ScoreBoard'
import './App.css';





class App extends Component{

  constructor(){
    super()
    this.state = {
      initialOrder: [],
      cardImages: [],
      score: 0,
      highScore: 0
    }
  }

//Restarte game to original order and reset score to 0. Update highscore if needed.
_endGame = () => {
  let startCopy = this.state.initialOrder;
  this.setState({cardImages: startCopy});
  if(this.state.score > this.state.highScore){
    this.setState({highScore: this.state.score});
  }
  this.setState({score: 0})
}

// Shuffle order of array after check click if card had not already been selected
_shuffleArray = (copy) => {
  let m = copy.length;
  let i, temp = 0;

  while(m){
    i = Math.floor(Math.random() * m--);
    temp = copy[m];
    copy[m] = copy[i];
    copy[i] = temp;
  }
  this.setState({cardImages: copy});
  this.setState({score: this.state.score + 1});
}

handleClick = (e) => {
  let { clicked, index } = e.target.dataset;
  if(clicked === "false"){
  let copy = [...this.state.cardImages];
  index = parseInt(index)
  const updateClick = {...copy[index], clicked: 'true'};
  copy = [
    ...copy.slice(0, index),
    updateClick,
    ...copy.slice(index + 1)
  ];
  this._shuffleArray(copy);

}else{
  this._endGame();
}
}

componentDidMount(){
  try{
    let api_key = process.env.REACT_APP_GIFY_API_KEY;
    const response = fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&offset=10&limit=12&q=meme`)
    response.then(res => res.json())
    .then(data => {
      let imageArray = data.data.map(img => {
        return {
          url: img.images.original.url,
          clicked: 'false'
        }
      })
      let copy = [...imageArray];
      this.setState({cardImages: imageArray});
      this.setState({initialOrder: copy})
    });
  }catch(e){
    alert("ERR: " + e)
  }
}

render(){
  let { cardImages } = this.state;

  return (!cardImages.length) ?
    (
      <div className="App">
      <img src='https://media.tenor.com/jfmI0j5FcpAAAAAd/loading-wtf.gif' alt="load"/>
      </div>
    ) :
    (
    <div className="App">
      <ScoreBoard score={this.state.score} highScore={this.state.highScore}/>
      <CardContainer handleClick={this.handleClick} cards={cardImages}/>
    </div>
    );
  }
}
export default App;
