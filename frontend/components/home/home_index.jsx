import React from 'react';
import NavBar from '../nav_bar';
import ReviewFeed from '../reviews/review_feed';
import UserStats from '../stats/user_stats';
import Loader from 'react-loader';

const HomeIndex = (props) => {
  
  return (
    <main className="group home-index">
      <div className="home-review-feed">
        <Loader loaded={!props.loading}>
          <ReviewFeed
            feedType={props.feedType}
            reviews={props.reviews}
            user={props.user}
            follows={props.follows}
            loading={props.loading}
            />

        </Loader>
      </div>
      <div className="home-user-stats">
        <UserStats user={props.user} />
      </div>
    </main>
  );

};

export default HomeIndex;
