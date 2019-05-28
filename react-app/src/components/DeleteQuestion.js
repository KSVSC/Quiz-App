import React, { Component } from 'react';
import './DeleteUser.css';

class DeleteQuestion extends Component {
	constructor(){
		super();
		this.state={
			data:[],
			to_del:'',
			submitted: false
		}
		this.ops=0;

		this.check_button=this.check_button.bind(this);
    this.delete = this.delete.bind(this);
    this.DelQues=this.DelQues.bind(this);

	}

	check_button(event){
		this.setState({to_del: event.target.value});
	}

	delete(event){
		event.preventDefault();
    fetch('http://localhost:8080/question/' + this.state.to_del, {
     method: 'DELETE',
     body: JSON.stringify(this.state.to_del),
   })
      .then(response => {
        if(response.status >= 200 && response.status < 300)
          this.setState({submitted: true});
      	this.setState({to_del: ''});
      	this.DelQues();
      });
	}

	componentDidMount() {
    this.DelQues();
  }

  DelQues(){
    const request = new Request('http://127.0.0.1:8080/question/');
    fetch(request)
      .then(response => response.json())
        .then(data => this.setState({data: data}));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Delete a Question</h1>
        </header>

        <form onSubmit={this.delete}>
         <table className="table-hover">
          <thead>
            <tr>
              <th>Select to delete </th>
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
                  	  onChange={this.check_button}></input></td>
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
       <button type="submit">Delete</button>
       </form>
      </div>
    );
  }
}

export default DeleteQuestion;
