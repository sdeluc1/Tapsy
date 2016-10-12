import React from 'react';
import ReviewFeedItem from './review_feed_item';

const ReviewFeed = (props) => {

    let reviews = props.reviews;

    if(props.user === null){
      return <div className="review-feed"></div>;
    }

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

    const compare = (a, b) => {
      if(a.id < b.id){
        return -1;
      } else {
        return 1;
      }
    };

    reviews.sort( (a, b) => {
      return b.id - a.id;
    });

    return(
      <div className="review-feed">
        <header id="review-feed-header">Recent Activity</header>
        <ul className="review-feed-list">
          {
            reviews.map( (review, idx) => {
              return <ReviewFeedItem key={idx} review={review} />;
            })
          }
        </ul>
      </div>
    );

};

export default ReviewFeed;
