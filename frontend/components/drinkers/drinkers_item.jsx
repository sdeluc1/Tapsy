import React from 'react';
import { Link } from 'react-router';

const DrinkersItem = (props) => {
  debugger
  return(
    <li className="drinkers-item">
      <img id="user-avatar" src={props.avatar}/>
      <Link to={`/user/${props.userId}`}>
        <strong id="drinker-name">{props.drinker}</strong>
      </Link>
      <strong id="checkins">{props.checkins} Check-ins</strong>
    </li>
  );
};

export default DrinkersItem;
