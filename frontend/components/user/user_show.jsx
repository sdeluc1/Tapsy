import React from 'react';
import UserHeader from './user_header';
import ReviewFeed from '../reviews/review_feed';

const UserShow = (props) => {

  if(props.user.loading) {
    return <div></div>;
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
        <ReviewFeed feedType="user" reviews={props.user.reviews} userId={props.user.id} />
      </div>
    );
  }
};

export default UserShow;
