import React from 'react';
import { Link } from 'react-router';

const TopBeersItem = (props) => {
  return(
    <li className="top-beers-item">
      <Link to={`/beer/${props.beerId}`}>
        <strong id="top-beers-name">{props.topBeer}</strong>
      </Link>
      <strong id="rating">
        <strong id="rating-num">{props.rating}</strong>
        <strong id="rating-word"> Rating</strong>
      </strong>
    </li>
  );
};

export default TopBeersItem;
