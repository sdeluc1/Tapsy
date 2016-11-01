import React from 'react';
import ReviewFeedItem from './review_feed_item';
import Loader from 'react-loader';

const ReviewFeed = (props) => {
    let reviews = props.reviews;
    let loadArg;
    if(props.user === null || typeof props.reviews === "undefined"){
      return <div className="review-feed"></div>;
    }

    const headerText = () => {
      switch(props.feedType){
        case "home":
          loadArg = props.user.id;
          return "Recent Followed Activity";
        case "beer":
          loadArg = props.beerId
          return "Recent Activity";
        case "user":
          loadArg = props.user.id
          return `${props.user.name}'s Recent Activity`;
        case "brewery":
          loadArg = props.breweryId;
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

    const loadMore = () => {
      if(props.feedType == 'brews'){
        props.moreReviews(props.reviews.length, true);
      } else {
        props.moreReviews(loadArg, props.reviews.length, true);
      }
    }

    const showButton = () => {
      debugger
      if(props.moreToAppend){
        return <button className="load-more" onClick={loadMore}>Load More</button>;
      } else {
        return "";
      }
    }

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
          {showButton()}
      </div>
    );

};

export default ReviewFeed;
