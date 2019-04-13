import React, { Component } from 'react';
import '../../App.css';
import { Divider, Segment, Button, Header, Image, Modal, Input } from 'semantic-ui-react'

class Planer extends Component {
  state = { open: false }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })
  render() {
    const { open, dimmer } = this.state
    return (
      <div className="main-window-component">
        <div className="top-planer-container">
          <Segment basic textAlign='center'>
            <Divider horizontal>settings</Divider>
          </Segment>
          <Button primary onClick={this.show('blurring')}>Create new list</Button>
          <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Create new list!</Modal.Header>
          <Segment basic textAlign='center'>
            <Input
              action={{ color: 'blue', content: 'Add' }}
              icon='cart arrow down'
              iconPosition='left'
              placeholder='Enter product here...'
            />

            <Divider horizontal>Or</Divider>


          </Segment>

            <Modal.Actions>
              <Button color='black' onClick={this.close}>
                Close
              </Button>
              <Button
                positive
                icon='checkmark'
                labelPosition='right'
                content="Create list"
                onClick={this.close}
              />
            </Modal.Actions>
          </Modal>
        </div>
        <div className="bottom-planer-container">
          <Segment basic textAlign='center'>
            <Divider horizontal>Active lists</Divider>
          </Segment>
        </div>
      </div>
    );
  }
}

export default Planer;
