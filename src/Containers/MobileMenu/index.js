import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'


export default class MenuExampleIcons extends Component {
  render() {

    if(this.props.authenticated) {
      return (
        <div className="mobile-menu-container">
          <div className="mobile-btn-nav"><Icon className="nav-icon-mobile" name='home' /></div>
          <div className="mobile-btn-nav"><Icon className="nav-icon-mobile" name='list' /></div>
          <div className="mobile-btn-nav"><Icon className="nav-icon-mobile" name='table' /></div>
          <div className="mobile-btn-nav"><Icon className="nav-icon-mobile" name='info circle' /></div>
          <div className="mobile-btn-nav"><Icon className="nav-icon-mobile" name='settings' /></div>
        </div>
      )
    } else {
      return null;
    }
  }
}
