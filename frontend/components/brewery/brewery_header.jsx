import React from 'react';

const BreweryHeader = (props) => {
  return(
    <header className="group brewery-header">
      <div className="brewery-icon"></div>
      <div className="info-list">
        <strong id="brewery-name">{props.brewery.name}</strong>
        <a href="#"><strong id="location">{props.brewery.location}</strong></a>
        <strong id="brewery-style">{props.brewery.brewery_type}</strong>
      </div>
      <div className="num-reviews">
        <p id="total-box">
          <strong id="total">TOTAL</strong>
          <strong id="total-brewery-reviews">47</strong>
        </p>
        <p id="you-box">
          <strong id="you">YOU</strong>
          <strong id="user-brewery-reviews">12</strong>
        </p>
      </div>
      <div className="info-bar">
        <strong id="rating" className="brewery-bar-item">RATING OOOOO</strong>
        <strong id="num-ratings" className="brewery-bar-item"># of ratings</strong>
        <strong id="num-beers" className="brewery-bar-item">75 Beers</strong>
        <strong id="date-added" className="brewery-bar-item">Added 10/6/16</strong>
      </div>
      <div className="brewery-description">{props.brewery.description}</div>
      
    </header>
  );

};

export default BreweryHeader;
