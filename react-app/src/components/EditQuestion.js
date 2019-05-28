import React, { Component } from 'react';
import './EditUser.css';

class EditQuestion extends Component {
	constructor(){
		super();
		this.state={
      formData: {
        id:"",
        genre: "",
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        answer: "",
        q_type: "",
      },
      data:[],
      ques:[],
      to_edit:'',
      clicked: false,
			submitted: false
		}
		this.ops=0;

		this.check_button=this.check_button.bind(this);
    this.EditQues=this.EditQues.bind(this);

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

  
	check_button(key,event){
    this.setState({to_edit: event.target.value});
    this.state.formData.id=key;
    this.state.clicked= true;
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

  handleSubmit (event) {
    console.log('heehe')
    this.state.submitted= true;
    event.preventDefault();
     fetch('http://localhost:8080/updatequestion/', {
      method: 'POST',
      body: JSON.stringify(this.state.formData),
    })
       .then(response => {
         if(response.status >= 200 && response.status < 300)
         this.setState({to_edit: ''});
         this.EditQues();
       });
  }
  
	componentDidMount() {
    this.EditQues();
  }

  EditQues(){
    const request = new Request('http://127.0.0.1:8080/question/');
    fetch(request)
      .then(response => response.json())
        .then(data => this.setState({data: data}));
  }

  render() {
  
    return (
    <div>
      {!this.state.clicked &&
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Edit a Question</h1>
        </header>

        <form onSubmit={this.handleSubmit}>
         <table className="table-hover">
          <thead>
            <tr>
              <th>Select to edit </th>
              <th>ID</th>
              <th>Genre</th>
              <th>Question</th>
              <th>Option1</th>
              <th>Option2</th>
              <th>Option3</th>
              <th>Option4</th>              
              <th>Answer</th>
              <th>QType</th>
            </tr>
          </thead>
          <tbody>{this.state.data.map((item, key)=>{
               return (
                  <tr key = {key}>
                  	  <td><input type="radio" value={item.id} name="radio"
                  	  onChange={(event) => this.check_button(item.id,event)}></input></td>
                      <td>{item.id}</td>
                      <td>{item.genre}</td>
                      <td>{item.question}</td>
                      <td>{item.option1}</td>
                      <td>{item.option2}</td>
                      <td>{item.option3}</td>
                      <td>{item.option4}</td>
                      <td>{item.answer}</td>
                      <td>{item.q_type}</td>
                  </tr>
                )
             })}
          </tbody>
       </table>
       </form>
      </div>
      }
      <div>
        {this.state.clicked &&
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Update Question</h1>
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
        <div>
        {this.state.submitted &&
          <div>
            <h2>
              Updated question successfully .
            </h2>
             This has been printed using conditional rendering.
          </div>
        }
      </div>  
      </div>
      }
      </div>
      </div>

    );
    
  }
}

export default EditQuestion;
