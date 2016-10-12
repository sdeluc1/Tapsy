import React from 'react';

const TopBeersItem = (props) => {
  return(
    <li className="top-beers-item">
      <strong id="top-beers-name">{props.topBeer}</strong>
      <strong id="rating">
        <strong id="rating-num">{props.rating}</strong>
        <strong id="rating-word"> Rating</strong>
      </strong>
    </li>
  );
};

export default TopBeersItem;
