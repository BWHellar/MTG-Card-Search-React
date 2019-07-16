import React, { Component } from 'react';
import { connect } from 'react-redux';
import { favoriteCard } from '../actions';

class CardItem extends Component {

  constructor() {
    super();
    this.state = {
      favorited: false
    }
  }
  
  favorite(card) {
    this.props.favoriteCard(card);
    this.setState({favorited: true});
  }
  
  
  render() {
    let { card } = this.props;

    return (
      <div className="card-item">
      {
        this.state.favorited ?
          <div className="star">&#9733;</div>
        :
        <div 
          className="star"
          onClick={() => this.favorite(card)}>
          &#9734;
        </div>
      }
      <div className="card-text">
        <a href={card.scryfall_uri}>
          <h4 className="card-text">{card.name}</h4>
        </a>
      </div>
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