import React from 'react';
import BeerHeader from './beer_header';
import ReviewFeed from '../reviews/review_feed';

const BeerShow = (props) => {
    if (props.loadingBeer || props.loadingReview) {
      return(
        <div></div>
      );
    } else {
      return(
        <div className="main-show-beer">
          <BeerHeader beer={props.showBeer} />
          <ReviewFeed feedType={props.feedType} reviews={props.reviews} beerId={props.showBeer.id}/>
        </div>
      );
    }

};

export default BeerShow;
