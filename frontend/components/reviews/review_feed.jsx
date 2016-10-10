import React from 'react';
import ReviewFeedItem from './review_feed_item';

const ReviewFeed = (props) => {

  const filterFeed = () => {
    let selectedReviews = [];
    if(props.feedType === "brews") {
      return props.reviews;
    } else {

      props.reviews.forEach( (review) => {
        switch(props.feedType) {
          case "home":
            const followArr = [];
            props.follows.forEach( (follow) => {
              if(follow.user_id === props.user.id) {
                followArr.push(follow.follow_id);
              }
            });
            if(followArr.includes(review.author_id)){
              selectedReviews.push(review);
            }
            break;

          case "user":
            if(review.author_id === props.userId) {
              selectedReviews.push(review);
            }
            break;

          case "beer":
            if(review.beer_id === props.beerId) {
              selectedReviews.push(review);
            }
            break;

          case "brewery":
            if(review.brewery.id === props.breweryId) {
              selectedReviews.push(review);
            }
            break;
          default:
            break;
        }
      });
    }
    return selectedReviews;
  };

    return(
      <div className="review-feed">
        <header id="review-feed-header">Recent Activity</header>
        <ul className="review-feed-list">
          {
            filterFeed().reverse().map( (review, idx) => {
              return <ReviewFeedItem key={idx} review={review} />;
            })
          }
        </ul>
      </div>
    );

};

export default ReviewFeed;
