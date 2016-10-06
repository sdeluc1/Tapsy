import React from 'react';

const BeerHeader = (props) => {

  return(
    <header className="beer-header">
      <div className="beer-icon"></div>
      <div className="info-list">
        <strong id="beer-name">{props.beer.name}</strong>
        <strong id="brewery-name">{props.beer.brewery_id}</strong>
        <strong id="beer-style">{props.beer.style}</strong>
      </div>
      <div className="num-reviews">REVIEW COUNTS</div>
      <div className="info-bar">
        RATING, ABV, AND OTHER STUFF
      </div>
      <div className="beer-description">DESCRIPTION</div>
    </header>
  );

};

export default BeerHeader;
