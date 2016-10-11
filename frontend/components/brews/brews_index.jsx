import React from 'react';
import ReviewFeed from '../reviews/review_feed';

const BrewsIndex = (props) => {

  if(props.loadingReviews){
    return <div></div>;
  } else {
    return(
      <div className="main-brews-page">
        <ReviewFeed reviews={props.reviews} feedType={props.feedType} />
      </div>
    );
  }

};

export default BrewsIndex;
