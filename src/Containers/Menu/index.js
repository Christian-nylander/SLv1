import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'

export default class MenuExampleIcons extends Component {
  render() {

    if(this.props.authenticated) {
      return (
        <div>
          <div id="menu1" className="banner">
            <div className="inner-banner">
              <p className="logo-contianer">LOGO</p>
            </div>
            <div id="menu2" className="inner-banner-middle">
              <div className="nav-box"><Icon className="nav-icon" name='home' /><p className="nav-links">Home</p></div>
              <div className="nav-box"><Icon className="nav-icon" name='list' /><p className="nav-links">List</p></div>
              <div className="nav-box"><Icon className="nav-icon" name='table' /><p className="nav-links">Kanban</p></div>
              <div className="nav-box"><Icon className="nav-icon" name='info circle' /><p className="nav-links">About</p></div>
              <div className="nav-box"><Icon className="nav-icon" name='setting' /><p className="nav-links">Settings</p></div>
            </div>
            <div id="menu3" className="inner-banner">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGUsug5321YpgmyZBfyowM1WmwCglTJ0czWogvCz65tyw7NSoj" className="profile-image" alt="img"/>
              <p className="profile-name">Tester</p>
              <Icon className="icon-arrow-down" name="angle down" />
            </div>
          </div>
          <div className="banner-child">

          </div>
        </div>
      )
    } else {
      return null;
    }
  }
}
