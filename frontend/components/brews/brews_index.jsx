import React from 'react';
import ReviewFeed from '../reviews/review_feed';
import TopBeers from '../top_beers/top_beers';
import Loader from 'react-loader';

const BrewsIndex = (props) => {
  if(props.loadingReviews || props.loadingBeer){
    return <div><Loader /></div>;
  } else {
    return(
      <div className="main-brews-page">
        <div className="left-content">
          <ReviewFeed
            reviews={props.reviews}
            feedType={props.feedType}
            moreReviews={props.moreReviews}
            moreToAppend={props.moreToAppend}
            currUserId={props.currUserId}
          />
        </div>
        <div className="top-beers">
          <TopBeers topBeers={props.beers} />
        </div>
      </div>
    );
  }

};

export default BrewsIndex;
