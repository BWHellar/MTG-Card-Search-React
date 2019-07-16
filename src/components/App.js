import React, { Component } from 'react';
import SearchCards from './SearchCards';
import '../styles/index.css';
import CardList from './CardList';

class App extends Component {
  render() {
    return (
      <div>
        <h2> MTG Search </h2>
        <SearchCards />
        <CardList />
      </div>
    )
  }
}

export default App;