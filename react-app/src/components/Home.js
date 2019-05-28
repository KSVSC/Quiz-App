import React, { Component } from 'react';
import NewComponent from './NewComponent';
import './Home.css'

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Quiz App</h1>
        </header>
        <NewComponent text={"Welcome to the Quiz App"}/>
      </div>
    );
  }
}

export default Home;
