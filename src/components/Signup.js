import React, {Component} from 'react';
import {connect} from 'react-redux';
import {userPostFetch} from '../actions';

class Signup extends Component {
  state = {
    email: "",
    password: "",
    avatar: "",
    bio: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.userPostFetch(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Sign Up For An Account</h1>

        <label>Email</label>
        <input
          name='email'
          placeholder='Email'
          value={this.state.email}
          onChange={this.handleChange}
          /><br/>

        <label>Password</label>
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={this.state.password}
          onChange={this.handleChange}
          /><br/>

        <label>Avatar</label>
          <input
            name='avatar'
            placeholder='Avatar (URL)'
            value={this.state.avatar}
            onChange={this.handleChange}
            /><br/>

          <label>Bio</label>
          <textarea
            name='bio'
            placeholder='Bio'
            value={this.state.bio}
            onChange={this.handleChange}
            /><br/>

        <input type='submit'/>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Signup);