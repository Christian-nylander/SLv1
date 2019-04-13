import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import Logo from '../../Images/logo.png';

export default class MenuExampleIcons extends Component {
  render() {

    if(this.props.authenticated) {
      return (
        <div className="banner">
          <div id="align-first-navigation" className="banner-child">
            <img src={Logo} className="logo" alt="logo" /><p className="banner-name">List <span className="color-word">Planer</span></p>
          </div>
          <div id="align-middle-navigation" className="banner-child">
            <p className="nav-text">Home</p>
            <p className="nav-text">Planer</p>
            <p className="nav-text">Kamban</p>
            <p className="nav-text">Settings</p>
            <p className="nav-text">About</p>
            <p className="nav-text"></p>
            <p className="nav-text"></p>
          </div>
          <div id="align-middle-third" className="banner-child">
            <img src="http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png" className="user-profile-navbar" alt="none"/>
            <p className="profile-name">Test User</p>
            <Icon className="bars-icon" name='bars' size="big" />
          </div>
        </div>
      )
    } else {
      return null;
    }
  }
}
