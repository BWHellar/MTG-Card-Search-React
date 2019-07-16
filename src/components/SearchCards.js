import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';


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
    const url = `https://api.scryfall.com/cards/search?order=cmc&q=${name}+pow%3D${cost}`
    console.log('state', this.state, 'url', url);
  }
  
  
  render() {
    return (
      <Form inline>
        <FormGroup>
          <h2>Name</h2>
          {' '}
          <FormControl type="text" placeholder="Archangel"
          onChange={event => this.setState({name: event.target.value})}/>
        </FormGroup>
        {' '}
        <FormGroup>
          <h2>Cost</h2>
          {' '}
          <FormControl type="text" placeholder="White"
          onChange={event => this.setState({cost: event.target.value})}/>
        </FormGroup>
        {' '}
        <Button onClick={()=> this.search()}>Search</Button>
      </Form>
    )
  }
}

export default SearchCards;