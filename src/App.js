import React, { Component } from 'react';
import CardContainer from './components/CardContainer';
import './App.css';





class App extends Component{

  constructor(){
    super()
    this.state = {
      initialOder: [],
      cardImages: [],
      score: 0
    }
  }



handleClick = (e) => {
  console.log(e.target)
  console.log(e.target.dataset.clicked)
  if(e.target.dataset.clicked === "false"){
  e.target.dataset.clicked = "true"
  let copy = this.state.cardImages;
  let m = copy.length;
  let i, temp = 0;

  while(m){
    i = Math.floor(Math.random() * m--);
    temp = copy[m];
    copy[m] = copy[i];
    copy[i] = temp;
  }
  this.setState({cardImages: copy});

}
}


componentDidMount(){
  try{
    let api_key = process.env.REACT_APP_GIFY_API_KEY;
    const response = fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&offset=31&limit=12&q=meme`)
    response.then(res => res.json())
    .then(data => {
      this.setState({cardImages: data.data});
      this.setState({initialOder: data.order})
    });
  }catch(e){
    alert("ERR: " + e)
  }
}

render(){
  let { cardImages } = this.state;

  return (!cardImages.length === 0) ?
    (
      <div className="App">
      <img src='https://media.tenor.com/jfmI0j5FcpAAAAAd/loading-wtf.gif' alt="load"/>
      </div>
    ) :
    (
    <div className="App">
      <CardContainer handleClick={this.handleClick} cards={cardImages}/>
    </div>
    );
  }
}
export default App;
