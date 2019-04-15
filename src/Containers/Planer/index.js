import React, {Component} from 'react';
import '../../App.css';
import {Divider, Button, Card, Image, Header, Icon} from 'semantic-ui-react'
import CreateNewList from './CreateNewList';
import axios from 'axios';

class Planer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allList: [],
    };
  }
  componentDidMount() {
    this.getLists();
  }

    getLists = () => {
    const go = this;
    axios({
        method: 'get',
        url: 'http://localhost:3000/api/lists',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': localStorage.getItem("token")
        }
        })
        .then(response => {
          go.setState({allList: response.data})
        })
        .catch(e => {
          console.log(e)
        })
  }

  render() {
    const allList = this.state.allList.map((inData, index) => {
      return(
      <Card key={index}>
        <Card.Content>
          <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'/>
          <Card.Header className="line-left">{inData.name}</Card.Header>
          <Card.Meta className="line-left">{inData.date}</Card.Meta>
          <Card.Description className="line-left">
            {inData.products.length}
            <strong> products</strong>
          </Card.Description>
        </Card.Content>
        <Card.Content>
          <div className='ui two buttons'>
            <Button color='green'>
              Open
            </Button>
            <Button color='red'>
              Delete
            </Button>
          </div>
        </Card.Content>
      </Card>
      )
    })
    return (
      <div className="main-window-component">
      <div className="top-planer-container">
        <Divider horizontal>
           <Header as='h4'>
             <Icon name='bar chart' />
             Settings
           </Header>
         </Divider>
         <CreateNewList update={this.getLists}/>
      </div>
        <div className="bottom-planer-container">
          <Divider horizontal>
             <Header as='h4'>
               <Icon name='bar chart' />
               Lists
             </Header>
           </Divider>
            <Card.Group>
              {allList}
            </Card.Group>
        </div>
    </div>
  );
  }
}

export default Planer;
