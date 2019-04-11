import React, { Component } from 'react'
import { Icon, Menu, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default class MenuExampleIcons extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  logout = () => {
    localStorage.clear();
    window.location.reload()
  }
  render() {
    const { activeItem } = this.state

    if(this.props.authenticated) {
      return (
        <Menu icon className="webMenu">
          <Link to="/">
            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
              <Icon name='home' />
            </Menu.Item>
          </Link>

          <Link to="/newlist">
            <Menu.Item
              name='add'
              active={activeItem === 'add'}
              onClick={this.handleItemClick}
            >
              <Icon name='add' />
            </Menu.Item>
          </Link>

          <Menu.Item
            name='user'
            active={activeItem === 'user'}
            onClick={this.handleItemClick}
          >
            <Icon name='user' />
          </Menu.Item>

          <Menu.Item
            name='users'
            active={activeItem === 'users'}
            onClick={this.handleItemClick}
          >
            <Icon name='users' />
          </Menu.Item>

          <Menu.Item
            name='settings'
            active={activeItem === 'settings'}
            onClick={this.handleItemClick}
          >
            <Icon name='settings' />
          </Menu.Item>
          <Button.Group className="sign-out-btn" basic size='small' onClick={this.logout}>
            <Button icon='sign-out' />
          </Button.Group>
        </Menu>
      )
    } else {
      return null;
    }

  }
}
