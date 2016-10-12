import React from 'react';

const TopBeersItem = (props) => {
  return(
    <li className="top-beers-item">
      <strong id="top-beers-name">{props.topBeer}</strong>
      <strong id="rating">{props.rating} Rating</strong>
    </li>
  );
};

export default TopBeersItem;
