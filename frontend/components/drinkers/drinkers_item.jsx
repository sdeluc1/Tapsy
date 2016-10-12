import React from 'react';

const DrinkersItem = (props) => {
  return(
    <li className="drinkers-item">
      <strong id="drinker-name">{props.drinker}</strong>
      <strong id="checkins">{props.checkins} Check-ins</strong>
    </li>
  );
};

export default DrinkersItem;
