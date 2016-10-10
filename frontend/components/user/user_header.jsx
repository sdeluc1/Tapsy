import React from 'react';

const UserHeader = (props) => {

  const getFollowId = (followed_id) => {
    let result;
    props.currUser.follows.forEach( (followObj) => {
      if(followObj.follow === followed_id ) {
        result = followObj.id;
      }
    });
    return result;
  };

  const add = (follow) => {
    props.addFollow(follow);
  };

  const remove = (id) => {
    props.removeFollow(id);
  };

  const followStatus = () => {
    if(props.user.id === props.currUser.id) {
      return;
    } else if(props.currUser.follows_arr.includes(props.user.id)){
      return(
        <div
          onClick={() => remove(getFollowId(props.user.id))}
          className="remove-follow-user">
          <span id="remove-follow">
            Remove Follow
          </span>
        </div>
      );
    } else {
      const follow = {
        follow: {
          user_id: props.currUser.id,
          follow_id: props.user.id
        }
      };
      return(
        <div
          onClick={() => add(follow)}
          className="follow-user">
          <span id="add-follow">
            Add to Follows
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

};

export default UserHeader;
