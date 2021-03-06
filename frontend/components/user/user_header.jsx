import React from 'react';
import merge from 'lodash/merge';

class UserHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followed: this.props.following,
      count: this.props.user.num_followers,
      imageFile: null,
      imageUrl: null
    };
  }

  getFollow(followed_id){
    let result;
    this.props.allFollows.forEach( (followObj) => {
      if(followObj.follow_id === followed_id && followObj.user_id === this.props.currUserId) {
        result = followObj;
      }
    });
    return result;
  }

  add(follow) {
    this.props.addFollow(follow);
    this.props.requestFollows();
    this.setState({ followed: true, count: this.state.count + 1 });
  }

  remove(user) {
    this.props.removeFollow(user);
    this.props.requestFollows();
    this.setState({ followed: false, count: this.state.count - 1 });
  }

  followStatus() {
    if(this.props.user.id === this.props.currUserId) {
      return;
    } else if(this.state.followed){
      return(
        <div
          onClick={() => this.remove(this.getFollow(this.props.user.id))}
          className="remove-follow-user">
          <span id="remove-follow">
            Remove Follow
          </span>
        </div>
      );
    } else {
      const follow = {
        follow: {
          user_id: this.props.currUserId,
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
          <img id="user-header-profpic" src={this.props.user.avatar}/>
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
              <strong id="count">{this.props.user.num_followed}</strong>
              <strong className="count-type">FOLLOWING</strong>
            </p>
            <p>
              <strong id="count">{this.state.count}</strong>
              <strong className="count-type">FOLLOWED BY</strong>
            </p>
          </div>
        </div>
      </header>
    );
  }

}

export default UserHeader;
