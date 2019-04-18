import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import Logo from '../../Images/logo.png';

export default class MenuExampleIcons extends Component {
  render() {

    if(this.props.authenticated) {
      return (
        <div>
        <div className="banner">
          <div id="align-first-navigation" className="banner-child">

          </div>
          <div id="align-middle-navigation" className="banner-child">

          </div>
          <div id="align-middle-third" className="banner-child">

          </div>
        </div>
          <div className="secondary-banner">
            <div className="inner-secondary-banner">

            </div>
          </div>
        </div>
      )
    } else {
      return null;
    }
  }
}
