import React, { Component } from 'react';
import './NewUser.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class NewUser extends Component {
  constructor() {
    super();
    this.state = {
      formData: {
        name: "",
        emailid: "",
      },
      submitted: false,
    }

    this.handleFChange = this.handleFChange.bind(this);
    this.handleEChange = this.handleEChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (event) {
    event.preventDefault();
    fetch('http://localhost:8080/user', {
     method: 'POST',
     body: JSON.stringify(this.state.formData),
   })
      .then(response => {
        if(response.status >= 200 && response.status < 300)
          this.setState({submitted: true});
      });
  }

  handleFChange(event) {
    this.state.formData.name = event.target.value;
  }
  handleEChange(event) {
    this.state.formData.emailid = event.target.value;
  }


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Create a New User</h1>
        </header>
        <br/><br/>
        <div className="formContainer">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" value={this.state.name} onChange={this.handleFChange}/>
            </div>
            <div className="form-group">
                <label>EmailId</label>
                <input type="text" className="form-control" value={this.state.emailid} onChange={this.handleEChange}/>
            </div>
                <button type="submit" className="btn btn-default">Submit</button>
          </form>
        </div>

        {this.state.submitted &&
          <div>
            <h2>
              Successfully Registered.
            </h2>
          </div>
        }
      </div> 
    );
  }
}

export default NewUser;
