import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardItem from './CardItem';

class CardList extends Component {
  render(){
    console.log('this.props', this.props);
    
    return (
      <div>
      {
        this.props.cards.map((card, index) => {
          return (
            <CardItem key={index} card={card}/>
          )
        })
      }
      </div>
    )
  }
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps, null)(CardList);