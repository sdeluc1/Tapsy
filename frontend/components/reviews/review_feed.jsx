import React from 'react';
import ReviewFeedItem from './review_feed_item';

const ReviewFeed = (props) => {

    let reviews = props.reviews;

    if(props.feedType === "home"){
      const selectedReviews = [];
      props.reviews.forEach( (review) => {
        const followArr = [];
        props.follows.forEach( (follow) => {
          if(follow.user_id === props.user.id) {
            followArr.push(follow.follow_id);
          }
        });
        if(followArr.includes(review.author_id)){
          selectedReviews.push(review);
        }
      });
      reviews = selectedReviews;
    }

    return(
      <div className="review-feed">
        <header id="review-feed-header">Recent Activity</header>
        <ul className="review-feed-list">
          {
            reviews.reverse().map( (review, idx) => {
              return <ReviewFeedItem key={idx} review={review} />;
            })
          }
        </ul>
      </div>
    );

};

export default ReviewFeed;
