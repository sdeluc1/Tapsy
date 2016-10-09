import React from 'react';
import UserHeader from './user_header';
import ReviewFeed from '../reviews/review_feed';

const UserShow = (props) => {
  if(props.user.loading) {
    return <div></div>;
  } else {
    return(
      <div className="main-user-show">
        <UserHeader user={props.user} currUser={props.currUser}/>
        <ReviewFeed feedType="user" reviews={props.user.reviews} userId={props.user.id} />
      </div>
    );
  }
};

export default UserShow;
