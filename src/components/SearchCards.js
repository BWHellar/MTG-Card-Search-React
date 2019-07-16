import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setCards } from '../actions';

class SearchCards extends Component {
  constructor(){
    super();
    
    this.state = {
      name: '',
      cost: ''
    }
  }
  
  
  
  search (){
    let { name, cost } = this.state;
    const url = `https://api.magicthegathering.io/v1/cards?name=${name}&cmc{cost}`
    
    fetch (url, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      this.props.setCards(json.cards)
    });
  }
  
  
  render() {
    return (
      <Form inline>
        <FormGroup>
          <h2>Name</h2>
          {' '}
          <FormControl type="text" placeholder="Angel"
          onChange={event => this.setState({name: event.target.value})}/>
        </FormGroup>
        {' '}
        <FormGroup>
          <h2>Cost</h2>
          {' '}
          <FormControl type="text" placeholder="5"
          onChange={event => this.setState({cost: event.target.value})}/>
        </FormGroup>
        {' '}
        <Button onClick={()=> this.search()}>Search</Button>
      </Form>
    )
  }
}

export default connect(null, { setCards })(SearchCards);