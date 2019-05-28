import React, { Component } from 'react';
import './ViewUser.css';

class ViewUser extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    const request = new Request('http://127.0.0.1:8080/user/');
    fetch(request)
      .then(response => response.json())
        .then(data => this.setState({data: data}));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">View All Users</h1>
        </header>

        <table className="table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>EmailId</th>
            </tr>
          </thead>
          <tbody>{this.state.data.map(function(item, key) {
               return (
                  <tr key = {key}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.emailid}</td>
                  </tr>
                )
             })}
          </tbody>
       </table>
      </div>
    );
  }
}

export default ViewUser;
