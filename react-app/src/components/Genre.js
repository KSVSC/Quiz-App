import React, { Component } from 'react';
import NewComponent from './NewComponent';
import Music1 from './Music1';
import Music2 from './Music2';
import Books1 from './Books1';
import Books2 from './Books2';
import './Home.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Genre extends Component {
	constructor() {
    super();
    this.state = {
      clicked1: false,
      clicked2: false,
      clicked3: false,
      clicked4: false
    }
    this.musicOne = this.musicOne.bind(this);
   this.musicTwo = this.musicTwo.bind(this);
      this.bookOne = this.bookOne.bind(this);
         this.bookTwo = this.bookTwo.bind(this);
  }

  musicOne() {
  	this.setState({clicked1: true});
  }
  musicTwo() {
  	this.setState({clicked2: true});
  }
  bookOne() {
  	this.setState({clicked3: true});
  }
  bookTwo() {
  	this.setState({clicked4: true});
  }
  render() {
    return (
      <div>
      {(!this.state.clicked1 && !this.state.clicked2 && !this.state.clicked3 && !this.state.clicked4) &&
        <Router>
          <div>
		      <div className="App">
		        <header className="App-header">
		          <h1 className="App-title">Genre List</h1>
		        </header>
		        <NewComponent text={"1.MUSIC"}/>
		        <div className="form-group">
		        <label>SingleCorrect</label>
		        <li><button onClick={this.musicOne}>Quiz1</button></li>
		        </div>
		        <div className="form-group">
		        <label>MultipleCorrect</label>
		        <li><button onClick={this.musicTwo}>Quiz2</button></li>
				</div>
				<NewComponent text={"2.BOOKS"}/>
				<div className="form-group">
				<label>SingleCorrect</label>
				<li><button onClick={this.bookOne}>Quiz1</button></li>
				</div>
				<div className="form-group">
				<label>MultipleCorrect</label>
				<li><button onClick={this.bookTwo}>Quiz2</button></li>
		      	</div>
		      </div>
		      <Switch>
                 <Route exact path='/Music1' component={Music1} />
	             <Route exact path='/Music2' component={Music2} />
                 <Route exact path='/Books1' component={Books1} />
                 <Route exact path='/Books2' component={Books2} />
            </Switch>
		  </div>
        </Router>
    	}
        {this.state.clicked1 && <Music1 />}
        {this.state.clicked2 && <Music2 />}
        {this.state.clicked3 && <Books1 />}
        {this.state.clicked4 && <Books2 />}
      </div>
    );
  }
}

export default Genre;
