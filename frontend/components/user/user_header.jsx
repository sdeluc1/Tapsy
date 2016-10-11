import React from 'react';
import merge from 'lodash/merge';

class UserHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {followed: this.props.currUser.follows_arr.includes(this.props.user.id)};
  }

  getFollowId(followed_id){
    let result;
    this.props.currUser.follows.forEach( (followObj) => {
      if(followObj.follow === followed_id ) {
        result = followObj.id;
      }
    });
    return result;
  }

  add(follow) {
    this.props.addFollow(follow);
    this.props.receiveCurr(this.props.currUser);
    this.setState({ followed: true });
  }

  remove(userId) {
    this.props.removeFollow(userId);
    this.props.receiveCurr(this.props.currUser);
    this.setState({ followed: false });
  }

  followStatus() {
    if(this.props.user.id === this.props.currUser.id) {
      return;
    } else if(this.state.followed){
      return(
        <div
          onClick={() => this.remove(this.getFollowId(this.props.user.id))}
          className="remove-follow-user">
          <span id="remove-follow">
            Remove Follow
          </span>
        </div>
      );
    } else {
      const follow = {
        follow: {
          user_id: this.props.currUser.id,
          follow_id: this.props.user.id
        }
      };
      return(
        <div
          onClick={() => this.add(follow)}
          className="follow-user">
          <span id="add-follow">
            Add to Follows
          </span>
        </div>
      );
    }
  }

  render() {
    return(
      <header className="main-user-header">
        {this.followStatus()}
        <div className="user-pic-name">
          <div id="user-header-profpic"></div>
          <div className="user-header-names">
            <span id="user-fullname">{this.props.user.name}</span>
            <span id="username">{this.props.user.username}</span>
          </div>
        </div>
        <div className="header-stats">
          <div className="stats-line">
            <p>
              <strong id="count">{this.props.user.rev_count}</strong>
              <strong className="count-type">TOTAL</strong>
            </p>
            <p>
              <strong id="count">{this.props.user.unique_count}</strong>
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

}

export default UserHeader;
