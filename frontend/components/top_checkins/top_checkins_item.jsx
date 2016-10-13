import React from 'react';
import { Link } from 'react-router';

const TopCheckinsItem = (props) => {
  return(
    <li className="top-checkins-item">
      <Link to={`/beer/${props.beerId}`}>
        <strong id="top-checkins-name">{props.topCheckin}</strong>
      </Link>
      <strong id="checkin-count">{props.count} Check-ins</strong>
    </li>
  );
};

export default TopCheckinsItem;
