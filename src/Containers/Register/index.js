import React, { Component } from 'react';
import '../../App.css';
import { Input, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import history from '../../history';

class Register extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    errorMessage: ''
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  register = () => {
    this.setState({errorMessage: ''});
    if(this.state.email && this.state.password && this.state.username) {
      axios.post('http://localhost:3000/api/users', {
        name: this.state.username,
        email: this.state.email,
        password: this.state.password,
      })
      .then(function (response) {
        history.push('/');
      })
      .catch(function (error) {
        console.log(error);
      });
    } else {
      this.setState({errorMessage: 'One or more fields are empty'});
    }
  }

  render() {
    return (
      <div>
      <div className="register-container">
        <div className="register-left-child">
          <p className="first-topic">Already a member?</p>
          <p className="second-topic">To continue using the program, you must log in.</p>
          <Link className="link-container-register" to="/login"><Button inverted className="to-login-btn">LOGIN</Button></Link>
        </div>
        <div className="register-right-child">
          <p id="mobile-topic-2" className="first-topic-2">CREATE ACCOUNT</p>
          <div className="login-boxes-container">
            <div className="login-box"><Icon disabled name='facebook' size='big' /></div>
            <div className="login-box"><Icon disabled name='twitter square' size='big'/></div>
            <div className="login-box"><Icon disabled name='google' size='big'/></div>
          </div>
          <p className="or">OR USE YOUR EMAIL</p>
          <div className="input-container">
            <Input name="username" className="reg-input" icon='user' iconPosition='left' placeholder='Username...' value={this.state.username} onChange={this.handleChange}/>
            <Input name="email" className="reg-input" icon='mail' iconPosition='left' placeholder='Email...' value={this.state.email} onChange={this.handleChange}/>
            <Input name="password" type="password" className="reg-input" icon='key' iconPosition='left' placeholder='Password...' value={this.state.password} onChange={this.handleChange}/>
            <Button className="first-btn" primary onClick={this.register}>Create account</Button>
            <p className="error-text">{this.state.errorMessage}</p>
          </div>
        </div>
      </div>
      <div className="create-account-box">
        <Link className="link-container-register" to="/login"><p className="create-account-text">BACK TO LOGIN</p></Link>
      </div>
      </div>
    );
  }
}

export default Register;
