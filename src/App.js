import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        mode : "light"
    }
    this.changeMode = this.changeMode.bind(this);
  }
 
  changeMode(){
    if(this.state.mode === "light"){
       this.setState({mode: "dark"});
       document.body.style.backgroundColor = "black";
       document.body.style.color = "white";
    }
    else{
       this.setState({mode: "light"});
       document.body.style.backgroundColor = "white";
       document.body.style.color = "black";
    }   
}



  render() {
    let ButtonText = "";        
    if(this.state.mode === "light"){
        ButtonText = "Dark";
    }
    else{
        ButtonText = "Light";
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1>Clock</h1>
          <p id="Slogan">The time... is now.</p>
        </header>
        <main className ="Main">
          <Clock/>
          <br/>
          <button onClick={this.changeMode}>{ButtonText}</button>
        </main>
      </div>
    );
  }
}

export default App;
