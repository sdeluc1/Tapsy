import React from 'react';

const UserStats = (props) => {

  if(props.user === null){
    return <div className="group user-states-box"></div>;
  }

  return(
    <div className="group user-stats-box">
      <div className="group user-stats-top">
        <div id="stats-user-pic"></div>
        <div className="group stats-names">
          <span id="stats-fullname">{props.user.name}</span>
          <span id="stats-username">{props.user.username}</span>
        </div>
      </div>

      <div className="group stats-count-box">
        <div className="group top-stats-box">
          <p id="stats-total-box">
            <strong id="count-total">{props.user.rev_count}</strong>
            <strong id="word-total">TOTAL</strong>
          </p>
          <p id="stats-friends-box">
            <strong id="count-total">{props.user.num_followers}</strong>
            <strong id="word-total">FOLLOWED BY</strong>
          </p>
        </div>
        <div className="group bottom-stats-box">
          <p id="stats-total-box">
            <strong id="count-total">{props.user.unique_count}</strong>
            <strong id="word-total">UNIQUE</strong>
          </p>
          <p id="stats-friends-box">
            <strong id="count-total">{props.user.num_followed}</strong>
            <strong id="word-total">FOLLOWING</strong>
          </p>
        </div>
      </div>
    </div>
  );

};

export default UserStats;
