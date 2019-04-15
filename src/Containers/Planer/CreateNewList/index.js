import React, { Component } from 'react';
import '../../../App.css';
import { Divider, Segment, Button, Modal, Input, Icon, Table } from 'semantic-ui-react'
import axios from 'axios';

class Planer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      list: [],
      value: '',
      render: true,
      quantity: 0,
      listName: ''
    };
  }

  //Adds to local object/array
  add = () => {
    if(this.state.value.length < 1) {
      alert("EMPTY")
    } else if(this.state.value.length > 30) {
      alert("TO LONG")
    } else {
      const listObj = {
        id: Math.random(),
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

  setField = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  //Shows pop-up
  show = dimmer => () => this.setState({ dimmer, open: true })

  //Confirm to create list
  confirmList = () => {
      axios({
        method: 'post',
        url: 'http://localhost:3000/api/lists',
        data: {
          user: 'kalle',
          name: this.state.listName,
          date: new Date().toJSON().slice(0,10).replace(/-/g,'/'),
          friends: [],
          products: this.state.list
        },
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': localStorage.getItem("token")
        }
        })
        .then(response => {
          this.setState({ open: false, list: [] });
          this.props.update();
        })
        .catch(e => {
          console.log(e)
        })
  }

  //Closes pop-up window
  close = () => this.setState({ open: false });

  //Add Quantityfunction
  addQuan = (inData) => {
      inData.quantity = inData.quantity + 1;
      this.setState({render:true})
  }

  //Sub Quantity function
  subQuan = (inData) => {
    if(inData.quantity < 1) {
      inData.quantity = 0;
      this.setState({render:true})
    } else {
      inData.quantity = inData.quantity - 1;
      this.setState({render:true})
    }
  }

  //Delete from local array
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
          <Icon name='add to cart' /> {inData.username}
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
          <div>
          <Button primary onClick={this.show('blurring')}>Create new list</Button>
          <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <p className="topic-create-list">Create new list</p>
          <Segment basic textAlign='center'>
          <Divider horizontal>Shopping list name</Divider>
          <Input type="text" icon='shopping cart' iconPosition='left' placeholder='Shopping list name...' onChange={this.setField} name="listName" />
          </Segment>
          <Segment basic textAlign='center'>
          <Divider horizontal>Add products</Divider>
          <Input type='text' placeholder='Add product...' action onChange={this.setField} name="value" value={this.state.value} className="add-to-cart-input">
            <input />
            <Button primary onClick={this.add}>
              Add
            </Button>
          </Input>
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
    );
  }
}

export default Planer;
