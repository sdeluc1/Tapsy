import React from 'react';
import ReviewFeed from '../reviews/review_feed';
import TopBeers from '../top_beers/top_beers';

const BrewsIndex = (props) => {
  debugger
  if(props.loadingReviews || props.loadingBeer){
    return <div></div>;
  } else {
    return(
      <div className="main-brews-page">
        <div className="left-content">
          <ReviewFeed reviews={props.reviews} feedType={props.feedType} />
        </div>
        <div className="top-beers">
          <TopBeers topBeers={props.beers} />
        </div>
      </div>
    );
  }

};

export default BrewsIndex;
