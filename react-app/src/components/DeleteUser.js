import React, { Component } from 'react';
import './DeleteUser.css';

class DeleteUser extends Component {
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
    this.DelUser=this.DelUser.bind(this);

	}

	check_button(event){
		this.setState({to_del: event.target.value});
	}

	delete(event){
		event.preventDefault();
    fetch('http://localhost:8080/user/' + this.state.to_del, {
     method: 'DELETE',
     body: JSON.stringify(this.state.to_del),
   })
      .then(response => {
        if(response.status >= 200 && response.status < 300)
          this.setState({submitted: true});
      	this.setState({to_del: ''});
      	this.DelUser();
      });
	}

	componentDidMount() {
    this.DelUser();
    
  }

  DelUser(){
    const request = new Request('http://127.0.0.1:8080/user/');
    fetch(request)
      .then(response => response.json())
        .then(data => this.setState({data: data}));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Delete a User</h1>
        </header>

        <form onSubmit={this.delete}>
         <table className="table-hover">
          <thead>
            <tr>
              <th>Select to delete </th>
              <th>ID</th>
              <th>Name</th>
              <th>EmailId</th>
            </tr>
          </thead>
          <tbody>{this.state.data.map((item, key)=>{
               return (
                  <tr key = {key}>
                  	  <td><input type="radio" value={item.id} name="radio"
                  	  onChange={this.check_button}></input></td>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.emailid}</td>
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

export default DeleteUser;
