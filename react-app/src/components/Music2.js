import React, { Component } from 'react';
import './ViewUser.css';
import Genre from './Genre';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Music2 extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      to_chk: '',
      clicked: false
    }
    this.score=0;
    this.id=1;
    this.handleChange=this.handleChange.bind(this);
    this.musicOne = this.musicOne.bind(this);   
  }

  componentDidMount() {
    const request = new Request('http://127.0.0.1:8080/question/');
    fetch(request,{method:'GET',})
      .then(response => response.json())
        .then(data => this.setState({data: data}));
  }

handleChange(key,event){

  this.setState({
    to_chk: event.target.value
  });
  
  if(key.answer===event.target.value)
    this.score+=1;
  
}

musicOne() {
  this.setState({clicked: true});
}

render() {
  return (
    <div>
    {(!this.state.clicked &&
    <center>
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Music-MutipleCorrect</h1>
      </header>
            <center >
         {this.state.data.map((item, key)=>  {
               return (
                 <div>
               			{(item.genre==='Music' && item.q_type=='2') &&
                     <div>  
                      <h2>{item.question}</h2>
                      <h4><input
                        type="radio"
                        name={item.id}
                        value="1"
                        to_chk={false}
                        onChange={(event) => this.handleChange(item,event)}
                      />{item.option1} </h4>
                      <h4><input
                      type="radio"
                      name={item.id}
                      value="2"
                      to_chk={false}
                      onChange={(event) => this.handleChange(item,event)}
                    /> {item.option2} </h4>
                      <h4><input
                      type="radio"
                      name={item.id}
                      value="3"
                      to_chk={false}
                      onChange={(event) => this.handleChange(item,event)}
                    /> {item.option3} </h4>
                      <h4><input
                      type="radio"
                      name={item.id}
                      value="4"
                      to_chk={false}
                      onChange={(event) => this.handleChange(item,event)}
                    /> {item.option4} </h4>
                    </div>
                      }
                      
                  </div>
                  );
             })}
                    <div>
                      {(!(this.state.data.genre==="Music" && this.state.data.q_type==="2")) &&
                      <div>
                        <center>
                        <h2> Score= {this.score}</h2>
                        <li><button onClick={this.musicOne}>Continue</button></li>
                        <br></br><h2>Finished the Music quiz2 <br></br></h2>
                        </center>
                      </div>
                      }
                      </div>
        <Switch>
            <Route exact path='/Genre' component={Genre} />
        </Switch>
          </center>
        </div>
        </center>
    )}
    {this.state.clicked && <Genre />}
    </div>
        );
      }
}
export default Music2;
