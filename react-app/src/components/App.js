import React, { Component } from 'react';

import Home from './Home';
import Register from './Register';
import Admin from './Admin';


import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                  <Link className="navbar-brand" to={'/'}>React App</Link>
                </div>
                <ul className="nav navbar-nav">
                  <li><Link to={'/'}>Home</Link></li>
                  <li><Link to={'/Register'}>User</Link></li>
                  <li><Link to={'/Admin'}>Admin</Link></li>
                </ul>
              </div>
            </nav>
            <Switch>
                 <Route exact path='/' component={Home} />
                 <Route exact path='/Register' component={Register} />
                 <Route exact path='/Admin' component={Admin} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
