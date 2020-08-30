import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {getProfileFetch} from './actions';
import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './components/Logout';


class App extends Component {
  componentDidMount = () => {
    this.props.getProfileFetch()
  }

  render() {
    return (
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signup">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/signup" component={Signup}/>
          <Route path="/login" component={Login}/>
          <Route path="/logout" component={Logout}/>
        </Switch>
      </div>
    </Router>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch())
})

export default connect(null, mapDispatchToProps)(App);