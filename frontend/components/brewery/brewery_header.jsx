import React from 'react';

const BreweryHeader = (props) => {
  return(
    <header className="group brewery-header">
      <div className="brewery-icon"></div>
      <div className="info-list">
        <strong id="brewery-name">{props.brewery.name}</strong>
        <strong id="location">{props.brewery.location}</strong>
        <strong id="brewery-style">{props.brewery.brewery_type}</strong>
      </div>
      <div className="num-reviews">
        <p id="total-box">
          <strong id="total">TOTAL</strong>
          <strong id="total-brewery-reviews">{props.brewery.num_ratings}</strong>
        </p>
        <p id="you-box">
          <strong id="you">YOU</strong>
          <strong id="user-brewery-reviews">{props.brewery.user_reviews}</strong>
        </p>
      </div>
      <div className="info-bar">
        <strong id="rating" className="brewery-bar-item">Avg Rating: {props.brewery.overall_rating}</strong>
        <strong id="num-ratings" className="brewery-bar-item">{props.brewery.num_ratings} TOTAL</strong>
        <strong id="num-beers" className="brewery-bar-item">{props.brewery.num_beers} Beers</strong>
        <strong id="date-added" className="brewery-bar-item">Added {props.brewery.created_at} ago</strong>
      </div>
      <div className="brewery-description">{props.brewery.description}</div>

    </header>
  );

};

export default BreweryHeader;
