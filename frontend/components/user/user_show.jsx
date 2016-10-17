import React from 'react';
import UserHeader from './user_header';
import ReviewFeed from '../reviews/review_feed';
import TopCheckins from '../top_checkins/top_checkins';
import Loader from 'react-loader';

const UserShow = (props) => {
  
  if(props.user.loading) {
    return <div><Loader /></div>;
  } else {
    return(
      <div className="main-user-show">
          <UserHeader
            user={props.user}
            currUserId={props.currUserId}
            follows={props.follows}
            following={props.currFollow}
            allFollows={props.allFollows}
            addFollow={props.createFollow}
            removeFollow={props.deleteFollow}
            requestFollows={props.requestFollows}
            />
        <div className="left-content">
          <ReviewFeed feedType="user" reviews={props.user.reviews} user={props.user} />
        </div>
        <div className="top-checkins">
          <TopCheckins topCheckins={props.user.top_checkins} />
        </div>
      </div>
    );
  }
};

export default UserShow;
