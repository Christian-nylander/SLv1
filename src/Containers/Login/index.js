import React, { Component } from 'react';
import '../../App.css';
import { Input, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
  state = {
    email: '',
    password: '',
    errorMessage: '',
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  login = () => {
    this.setState({errorMessage: ''});
    if(this.state.email && this.state.password) {
      const go = this;
      axios.post('http://localhost:3000/api/Users/login', {
        email: this.state.email,
        password: this.state.password
      })
      .then(function (response) {
        localStorage.setItem("token", response.data.id);
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
      <div className="register-container">
        <div className="register-right-child">
          <p className="first-topic-2">LOGIN</p>
          <div className="login-boxes-container">
            <div className="login-box"><Icon disabled name='facebook' size='big' /></div>
            <div className="login-box"><Icon disabled name='twitter square' size='big'/></div>
            <div className="login-box"><Icon disabled name='google' size='big'/></div>
          </div>
          <p className="or">OR USE YOUR EMAIL</p>
          <div className="input-container">
            <Input name="email" className="reg-input" icon='mail' iconPosition='left' placeholder='Email...' value={this.state.email} onChange={this.handleChange}/>
            <Input name="password" type="password" className="reg-input" icon='key' iconPosition='left' placeholder='Password...' value={this.state.password} onChange={this.handleChange}/>
            <Button className="first-btn" primary onClick={this.login}>LOGIN</Button>
            <p className="error-text">{this.state.errorMessage}</p>
          </div>
        </div>
        <div className="register-left-child">
          <p className="first-topic">Need an account?</p>
          <p className="second-topic">You will need to register an account to use this web application! Click on the button to get started.</p>
          <Link className="link-container-register" to="/register"><Button inverted className="to-login-btn">REGISTER</Button></Link>
        </div>
      </div>
    );
  }
}

export default Login;
