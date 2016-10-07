import React from 'react';

const UserStats = (props) => {

  return(
    <div className="user-stats-box">
      <div id="stats-user-pic"></div>
      <div className="stats-names">
        <strong id="stats-fullname">{props.user.name}</strong>
        <strong id="stats-username">{props.user.username}</strong>
      </div>
      <div className="stats-count-box">
        <p id="stats-total-box">
          <strong id="count-total">25</strong>
          <strong id="word-total">TOTAL</strong>
        </p>
        <p id="stats-friends-box">
          <strong id="count-total">11</strong>
          <strong id="word-total">FRIENDS</strong>
        </p>
      </div>
    </div>
  );

};

export default UserStats;
