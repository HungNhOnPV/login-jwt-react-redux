import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {getProfileFetch} from './actions';
import Signup from './components/Signup';
import Login from './components/Login';


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
            <Link to="/signup">About</Link>
          </li>
          <li>
            <Link to="/login">Topics</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/signup" component={Signup}/>
          <Route path="/login" component={Login}/>
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