import React, { Component } from 'react';
import { connect } from 'react-redux';

class CardList extends Component {
  render(){
    console.log('this.props', this.props);
    
    return (
      <div>
      {
        this.props.cards.map((card, index) => {
          return (
            <div key={index}>
              <h4>{card.name}</h4>
            </div>
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