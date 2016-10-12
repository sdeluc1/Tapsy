import React from 'react';
import BreweryHeader from './brewery_header';
import ReviewFeed from '../reviews/review_feed';
import Drinkers from '../drinkers/drinkers';

const BreweryShow = (props) => {
    if (props.loadingBrewery) {
      return(
        <div></div>
      );
    } else {
      return(
        <div className="main-show-brewery">
          <div className="left-content">
            <BreweryHeader brewery={props.showBrewery} />
            <ReviewFeed
              feedType={props.feedType}
              reviews={props.reviews}
              breweryId={props.showBrewery.id}
            />
          </div>
          <div className="top-drinkers">
            <Drinkers drinkers={props.showBrewery.top_drinkers} />
          </div>
        </div>
      );
    }

};

export default BreweryShow;
