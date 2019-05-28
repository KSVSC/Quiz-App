import React, { Component } from 'react';
import NewUser from './NewUser';
import ViewUser from './ViewUser';
import Login from './Login';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Register extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                  <Link className="navbar-brand" to={'/'}>UserPage</Link>
                </div>
                <ul className="nav navbar-nav">
                  <li><Link to={'/Login'}>User Login</Link></li>
                  <li><Link to={'/NewUser'}>User Register</Link></li>
                  <li><Link to={'/ViewUser'}>View Users</Link></li>
                </ul>
              </div>
            </nav>
            <Switch>
                 <Route exact path='/Login' component={Login} />
                 <Route exact path='/NewUser' component={NewUser} />
                <Route exact path='/ViewUser' component={ViewUser} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default Register;