import React from 'react';
import NavBar from '../nav_bar';
import ReviewFeed from '../reviews/review_feed';

const HomeIndex = (props) => {
  if(props.loading) {
    return <div></div>;
  } else {
    return (
      <main className="home-index">
        <div className="home-review-feed">
          <ReviewFeed feedType={props.feedType} reviews={props.reviews}/>
        </div>
      </main>
    );
  }
};

export default HomeIndex;
