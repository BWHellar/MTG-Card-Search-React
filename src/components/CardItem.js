import React, { Component } from 'react';
import { connect } from 'react-redux';
import { favoriteCard } from '../actions';

class CardItem extends Component {
  render() {
    let { card } = this.props;

    return (
      <div className="card-item">
      <div 
        className="star"
        onClick={() => this.props.favoriteCard(card)}>
        &#9734;
      </div>
        <a href={card.scryfall_uri}>
          <h4 className="card-text">{card.name}</h4>
        </a>
        <img 
        src={card.imageUrl} 
        alt={card.name} 
        className="card-img"
        />
      </div>
    )
  }
}


export default connect(null, { favoriteCard })(CardItem);