import React from 'react';
import UserHeader from './user_header';
import ReviewFeed from '../reviews/review_feed';
import TopCheckins from '../top_checkins/top_checkins';
import Loader from 'react-loader';

class UserShow extends React.Component{
  constructor(props){
    super(props);

    this.deleteReview = this.deleteReview.bind(this);
  }

  deleteReview(id) {
    this.props.removeReview(id);
    this.props.moreReviews(this.props.user.id, 0, false);
    this.setState({});
  }

  render() {
    if(this.props.user.loading) {
      return <div><Loader /></div>;
    } else {
      return(
        <div className="main-user-show">
          <UserHeader
            user={this.props.user}
            currUserId={this.props.currUserId}
            follows={this.props.follows}
            following={this.props.currFollow}
            allFollows={this.props.allFollows}
            addFollow={this.props.createFollow}
            removeFollow={this.props.deleteFollow}
            requestFollows={this.props.requestFollows}
            />
          <div className="left-content">
            <ReviewFeed
              feedType="user"
              reviews={this.props.reviews.list}
              user={this.props.user}
              moreReviews={this.props.moreReviews}
              moreToAppend={this.props.reviews.moreToAppend}
              currUserId={this.props.currUserId}
              remove={this.deleteReview}
            />
          </div>
          <div className="top-checkins">
            <TopCheckins topCheckins={this.props.user.top_checkins} />
          </div>
        </div>
      );
    }
  }
}

export default UserShow;
