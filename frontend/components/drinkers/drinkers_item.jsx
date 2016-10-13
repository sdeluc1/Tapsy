import React from 'react';
import { Link } from 'react-router';

const DrinkersItem = (props) => {
  return(
    <li className="drinkers-item">
      <Link to={`/user/${props.userId}`}>
        <strong id="drinker-name">{props.drinker}</strong>
      </Link>
      <strong id="checkins">{props.checkins} Check-ins</strong>
    </li>
  );
};

export default DrinkersItem;
