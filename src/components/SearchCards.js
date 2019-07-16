import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';


class SearchCards extends Component {
  render() {
    return (
      <Form inline>
        <FormGroup>
          <h2>Name</h2>
          {' '}
          <FormControl type="text" placeholder="Archangel"/>
        </FormGroup>
        {' '}
        <FormGroup>
        <h2>Color</h2>
        {' '}
        <FormControl type="text" placeholder="White"/>
        </FormGroup>
        {' '}
        <Button>Search</Button>
      </Form>
    )
  }
}

export default SearchCards;