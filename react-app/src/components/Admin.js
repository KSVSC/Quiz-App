import React, { Component } from 'react';
import ViewUser from './ViewUser';
import DeleteUser from './DeleteUser';
import ViewQuestion from './ViewQuestion';
import NewQuestion from './NewQuestion';
import DeleteQuestion from './DeleteQuestion';
import EditQuestion from './EditQuestion';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Admin extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                  <Link className="navbar-brand" to={'/'}>AdminPage</Link>
                </div>
                <ul className="nav navbar-nav">
                  <li><Link to={'/ViewUser'}>View Users</Link></li>
                  <li><Link to={'/DeleteUser'}>Delete User</Link></li>
                  <li><Link to={'/NewQuestion'}>Create Question</Link></li>
                  <li><Link to={'/ViewQuestion'}>View Questions</Link></li>
                  <li><Link to={'/DeleteQuestion'}>Delete Question</Link></li>
                  <li><Link to={'/EditQuestion'}>Edit Question</Link></li>
                </ul>
              </div>
            </nav>
            <Switch>
                 <Route exact path='/ViewUser' component={ViewUser} />
                 <Route exact path='/DeleteUser' component={DeleteUser} />
                 <Route exact path='/NewQuestion' component={NewQuestion} />
                 <Route exact path='/ViewQuestion' component={ViewQuestion} />
                 <Route exact path='/DeleteQuestion' component={DeleteQuestion} />
                 <Route exact path='/EditQuestion' component={EditQuestion} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default Admin;
