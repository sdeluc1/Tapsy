import React from 'react';

const UserStats = (props) => {

  return(
    <div className="group user-stats-box">
      <div className="group user-stats-top">
        <div id="stats-user-pic"></div>
        <div className="group stats-names">
          <span id="stats-fullname">{props.user.name}</span>
          <span id="stats-username">{props.user.username}</span>
        </div>
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
