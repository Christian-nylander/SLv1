import React, { Component } from 'react';
import '../../App.css';
import { Divider, Segment, Button, Modal, Input, Icon, Table } from 'semantic-ui-react'

class Planer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      list: [],
      value: '',
      render: true,
      quantity: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

   add = () => {
     if(this.state.value.length < 1) {
       alert("EMPTY")
     } else if(this.state.value.length > 30) {
       alert("TO LONG")
     } else {
       const listObj = {
         id: Math.random(),
         username: 'Kalle',
         product: this.state.value,
         quantity: 0,
       }
       this.state.list.push(listObj);
       this.setState({ render: false, value: '' })
     }
   }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  show = dimmer => () => this.setState({ dimmer, open: true })

  confirmList = () => {
    this.setState({ open: false });
    console.log(this.state.list)
  }

  close = () => this.setState({ open: false });

  addQuan = (inData) => {
      inData.quantity = inData.quantity + 1;
      this.setState({render:true})
  }

  subQuan = (inData) => {
    if(inData.quantity < 1) {
      inData.quantity = 0;
      this.setState({render:true})
    } else {
      inData.quantity = inData.quantity - 1;
      this.setState({render:true})
    }
  }

  delete = (inData) => {
    const removeIndex = this.state.list.map(function(item) { return item.id; }).indexOf(inData.id);
    this.state.list.splice(removeIndex, 1);
    this.setState({render:true})
  }

  render() {
    const { open, dimmer } = this.state
    const list = this.state.list.map((inData, index) => {
      return(
      <Table.Row key={index}>
        <Table.Cell collapsing>
          <Icon name='user' /> {inData.username}
        </Table.Cell>
        <Table.Cell>{inData.product}</Table.Cell>
        <Table.Cell>
        <Button.Group basic size='small'>
          <Button icon='minus' onClick={() => this.subQuan(inData)}/>
          <Button>{inData.quantity}</Button>
          <Button icon='add' onClick={() => this.addQuan(inData)}/>
        </Button.Group>
        </Table.Cell>
        <Table.Cell collapsing textAlign='right'>
        <Button.Group basic size='small'>
         <Button className="btn-check" icon='checkmark' />
         <Button color='red' icon='cancel' onClick={() => this.delete(inData)}/>
        </Button.Group>
        </Table.Cell>
      </Table.Row>
    )
    })
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
          <Input type='text' placeholder='Add product...' action onChange={this.handleChange} value={this.state.value}>
            <input />
            <Button primary onClick={this.add}>
              Add
            </Button>
          </Input>
            <Divider horizontal>LIST</Divider>
          </Segment>
          <Table celled striped className="table-list">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='4'>Shopping List</Table.HeaderCell>
            </Table.Row>
            </Table.Header>
              <Table.Body>
                {list}
              </Table.Body>
            </Table>
            <Modal.Actions>
              <Button color='black' onClick={this.close}>
                Close
              </Button>
              <Button
                positive
                icon='checkmark'
                labelPosition='right'
                content="Create list"
                onClick={this.confirmList}
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
