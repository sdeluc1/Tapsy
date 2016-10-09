import React from 'react';
import BreweryHeader from './brewery_header';
import ReviewFeed from '../reviews/review_feed';

const BreweryShow = (props) => {
  debugger
    if (props.loadingBrewery || typeof props.loadingBrewery === "undefined") {
      debugger
      return(
        <div></div>
      );
    } else {
      return(
        <div className="main-show-brewery">
          <BreweryHeader brewery={props.showBrewery} />
          <ReviewFeed
            feedType={props.feedType}
            reviews={props.reviews}
            breweryId={props.showBrewery.id}
          />
        </div>
      );
    }

};

export default BreweryShow;
