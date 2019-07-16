import React, { Component } from 'react';

class CardItem extends Component {
  render() {
    let { card } = this.props;

    return (
      <div calssName="card-item">
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


export default CardItem