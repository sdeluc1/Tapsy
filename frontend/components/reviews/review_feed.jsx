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
    } else if(props.feedType === "beer"){
      const selectedReviews =[];
      props.reviews.forEach( (review) => {
        if(review.beer_id === props.beerId){
          selectedReviews.push(review);
        }
      });
      reviews = selectedReviews;
    }

    const headerText = () => {
      switch(props.feedType){
        case "home":
          return "Recent Followed Activity";
        case "beer":
          return "Recent Activity";
        case "user":
          return `${props.user.name}'s Recent Activity`;
        case "brewery":
          return "Recent Activity";
        case "brews":
          return "Recent Global Activity";
        default:
          return "";
      }

    };

    const handleEmpty = () => {
      if(reviews.length < 1){
        return <li className="no-reviews">No Recent Activity</li>;
      }
    };

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
        <header id="review-feed-header">{headerText()}</header>
        <ul className="review-feed-list">
          {
            reviews.map( (review, idx) => {
              return <ReviewFeedItem key={idx} review={review} />;
            })
          }
          {handleEmpty()}
        </ul>
      </div>
    );

};

export default ReviewFeed;
