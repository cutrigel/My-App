import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';

class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1>Clock</h1>
          <p id="Slogan">The time... is now.</p>
        </header>
        <main className ="Main">
          <Clock/>
        </main>
      </div>
    );
  }
}

export default App;
