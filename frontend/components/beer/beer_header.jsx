import React from 'react';

const BeerHeader = (props) => {
  return(
    <header className="beer-header">
      <div className="beer-icon"></div>
      <div className="info-list">
        <strong id="beer-name">{props.beer.name}</strong>
        <a href="#"><strong id="brewery-name">{props.beer.brewery.name}</strong></a>
        <strong id="beer-style">{props.beer.style}</strong>
      </div>
      <div className="num-reviews">REVIEW COUNTS</div>
      <div className="info-bar">
        <strong id="abv" className="beer-bar-item">{props.beer.abv}% ABV</strong>
        <strong id="ibu"className="beer-bar-item">{props.beer.ibu} IBU</strong>
        <strong id="rating" className="beer-bar-item">RATING OOOOO</strong>
        <strong id="num-ratings" className="beer-bar-item"># of ratings</strong>
        <strong id="date-added" className="beer-bar-item">Added 10/6/16</strong>
      </div>
      <div className="beer-description">{props.beer.description}</div>
    </header>
  );

};

export default BeerHeader;
