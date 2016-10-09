import React from 'react';

const UserHeader = (props) => {

  const followStatus = () => {
    if(props.user.id === props.currUser.id) {
      return;
    } else {
      return(
        <div className="follow-user">
          <span id="add-follow">
            Add to Friends
          </span>
        </div>
      );
    }
  };

  return(
    <header className="main-user-header">
      {followStatus()}
      <div className="user-pic-name">
        <div id="user-header-profpic"></div>
        <div className="user-header-names">
          <span id="user-fullname">{props.user.name}</span>
          <span id="username">{props.user.username}</span>
        </div>
      </div>
      <div className="header-stats">
        <div className="stats-line">
          <p>
            <strong id="count">{props.user.rev_count}</strong>
            <strong className="count-type">TOTAL</strong>
          </p>
          <p>
            <strong id="count">{props.user.unique_count}</strong>
            <strong className="count-type">UNIQUE</strong>
          </p>
          <p>
            <strong id="count">15</strong>
            <strong className="count-type">FRIENDS</strong>
          </p>
        </div>
      </div>
    </header>
  );

}

export default UserHeader;
