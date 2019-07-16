import React, { Component } from 'react';
import SearchCards from './SearchCards';
import '../styles/index.css';

class App extends Component {
  render() {
    return (
      <div>
        <h2> MTG Search </h2>
        <SearchCards />
      </div>
    )
  }
}

export default App;