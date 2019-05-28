import React, { Component } from 'react';
import './NewUser.css';

class NewQuestion extends Component {
  constructor() {
    super();
    this.state = {
      formData: {
        genre: "",
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        answer: "",
        q_type: "",
      },
      submitted: false,
    }

    this.handleGChange = this.handleGChange.bind(this);
    this.handleQChange = this.handleQChange.bind(this);
    this.handleO1Change = this.handleO1Change.bind(this);
    this.handleO2Change = this.handleO2Change.bind(this);
    this.handleO3Change = this.handleO3Change.bind(this);
    this.handleO4Change = this.handleO4Change.bind(this);
    this.handleAChange = this.handleAChange.bind(this);
    this.handleTChange = this.handleTChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  
  }

  handleSubmit (event) {
    event.preventDefault();
    fetch('http://localhost:8080/question', {
     method: 'POST',
     body: JSON.stringify(this.state.formData),
   })
      .then(response => {
        if(response.status >= 200 && response.status < 300)
          this.setState({submitted: true});
      });
  }

  handleGChange(event) {
    this.state.formData.genre = event.target.value;
  }
  handleQChange(event) {
    this.state.formData.question = event.target.value;
  }
  handleO1Change(event) {
    this.state.formData.option1 = event.target.value;
  }
  handleO2Change(event) {
    this.state.formData.option2 = event.target.value;
  }
  handleO3Change(event) {
    this.state.formData.option3 = event.target.value;
  }
  handleO4Change(event) {
    this.state.formData.option4 = event.target.value;
  }
  handleAChange(event) {
    this.state.formData.answer = event.target.value;
  }
  handleTChange(event) {
    this.state.formData.q_type = event.target.value;
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Add a New Question</h1>
        </header>
        <br/><br/>
        <div className="formContainer">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label>Genre</label>
                <input type="text" className="form-control" value={this.state.genre} onChange={this.handleGChange}/>
                <label>Question</label>
                <input type="text" className="form-control" value={this.state.question} onChange={this.handleQChange}/>
                <label>Option1</label>
                <input type="text" className="form-control" value={this.state.option1} onChange={this.handleO1Change}/>
                <label>Option2</label>
                <input type="text" className="form-control" value={this.state.option2} onChange={this.handleO2Change}/>
                <label>Option3</label>
                <input type="text" className="form-control" value={this.state.option3} onChange={this.handleO3Change}/>
                <label>Option4</label>
                <input type="text" className="form-control" value={this.state.option4} onChange={this.handleO4Change}/>
                <label>Answer</label>
                <input type="text" className="form-control" value={this.state.answer} onChange={this.handleAChange}/>
                <label>QType</label>
                <input type="text" className="form-control" value={this.state.q_type} onChange={this.handleTChange}/>
            </div>
                <button type="submit" className="btn btn-default">Submit</button>
          </form>
        </div>

        {this.state.submitted &&
          <div>
            <h2>
              New question successfully added.
            </h2>
             This has been printed using conditional rendering.
          </div>
        }
      </div>
    );
  }
}

export default NewQuestion;
