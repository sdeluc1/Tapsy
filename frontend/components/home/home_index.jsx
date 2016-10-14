import React from 'react';
import NavBar from '../nav_bar';
import ReviewFeed from '../reviews/review_feed';
import UserStats from '../stats/user_stats';

const HomeIndex = (props) => {
  if(props.loading) {
    return <div></div>;
  } else {
    return (
      <main className="group home-index">
        <div className="home-review-feed">
          <ReviewFeed
            feedType={props.feedType}
            reviews={props.reviews}
            user={props.user}
            follows={props.follows}
          />
        </div>
        <div className="home-user-stats">
          <UserStats user={props.user} />
        </div>
      </main>
    );
  }
};

export default HomeIndex;
