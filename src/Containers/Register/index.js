import React, { Component } from 'react';
import '../../App.css';
import { Input, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class Register extends Component {
  state = {
    username: '',
    email: '',
    password: '',
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div className="register-container">
        <div className="register-left-child">
          <p className="first-topic">Already a member?</p>
          <p className="second-topic">To continue using the program, you must log in.</p>
          <Link className="link-container-register" to="/login"><Button inverted className="to-login-btn">LOGIN</Button></Link>
        </div>
        <div className="register-right-child">
          <p className="first-topic-2">CREATE ACCOUNT</p>
          <div className="login-boxes-container">
            <div className="login-box"><Icon disabled name='facebook' size='big' /></div>
            <div className="login-box"><Icon disabled name='twitter square' size='big'/></div>
            <div className="login-box"><Icon disabled name='google' size='big'/></div>
          </div>
          <p className="or">OR USE YOUR EMAIL</p>
          <div className="input-container">
            <Input name="username" className="reg-input" icon='user' iconPosition='left' placeholder='Username...' value={this.state.username} onChange={this.handleChange}/>
            <Input name="email" className="reg-input" icon='mail' iconPosition='left' placeholder='Email...' value={this.state.email} onChange={this.handleChange}/>
            <Input name="password" className="reg-input" icon='key' iconPosition='left' placeholder='Password...' value={this.state.password} onChange={this.handleChange}/>
            <Button className="first-btn" primary>Create account</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
