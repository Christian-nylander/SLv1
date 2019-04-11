import React, { Component } from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from '../Containers/Home';
import Login from '../Containers/Login';
import Register from '../Containers/Register';
import history from "../history";
import Menu from '../Containers/Menu';
import MobileMenu from '../Containers/MobileMenu';
import NewList from '../Containers/NewList';
import CreateList from '../Containers/CreateList';
import '../App.css';

const PrivateRoute = ({component: Component, authenticated, ...rest}) => {
  return (
    <Route
     {...rest}
     render={(props) => authenticated
     ? <Component {...props} {...rest} />
     : <Redirect to='/login' /> } />
  )
}

const PublicRoute = ({component: Component, authenticated, ...rest}) => {
  return (
    <Route
     {...rest}
     render={(props) => !authenticated
     ? <Component {...props} {...rest} />
     : <Redirect to='/' /> } />
  )
}

class Routes extends Component {
  state = {
    authenticated: null,
    token: localStorage.getItem('token')
  }

  componentDidMount() {
    //check user
    if (this.state.token) {
      this.setState({ authenticated: true });
    } else {
      this.setState({ authenticated: false });
    }
  }

  logIn = () => {
    localStorage.setItem('token', 'jwtstuff');
    this.setState({ authenticated: true });
  }

  logOut = () => {
    localStorage.removeItem('token');
    this.setState({ authenticated: false });
  }

  render() {
    if (this.state.authenticated === null) {
      return null;
    }
    return (
        <Router history={history}>
          <div>
            <Menu authenticated={this.state.authenticated}/>
            <Switch>
              <PrivateRoute exact path='/' component={Home} authenticated={this.state.authenticated} />
              <PrivateRoute exact path='/newlist' component={NewList} authenticated={this.state.authenticated} />
              <PrivateRoute exact path='/createList' component={CreateList} authenticated={this.state.authenticated} />
              <PublicRoute exact path='/login' component={Login} authenticated={this.state.authenticated} logIn={this.logIn} />
              <PublicRoute exact path='/register' component={Register} authenticated={this.state.authenticated} logIn={this.logIn} />
              <Route path='*' render={() => <Redirect to='/' />} />
            </Switch>
            <MobileMenu className="mobileMenu" authenticated={this.state.authenticated}/>
          </div>
        </Router>
    );
  }
}

export default Routes;
