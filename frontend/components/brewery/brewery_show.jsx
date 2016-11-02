import React from 'react';
import BreweryHeader from './brewery_header';
import ReviewFeed from '../reviews/review_feed';
import Drinkers from '../drinkers/drinkers';
import Loader from 'react-loader';

class BreweryShow extends React.Component{
  constructor(props){
    super(props);

    this.deleteReview = this.deleteReview.bind(this);
  }

  deleteReview(id) {
    this.props.removeReview(id);
    this.props.moreReviews(this.props.showBrewery.id, 0, false);
    this.props.requestBrewery(this.props.showBrewery.id);
    this.setState({});
  }

  render() {
    if (this.props.loadingBrewery) {
      return(
        <div>
          <Loader />
        </div>
      );
    } else {
      return(
        <div className="main-show-brewery">
          <div className="left-content">
            <BreweryHeader brewery={this.props.showBrewery} />
            <ReviewFeed
              feedType={this.props.feedType}
              reviews={this.props.reviews}
              breweryId={this.props.showBrewery.id}
              moreReviews={this.props.moreReviews}
              moreToAppend={this.props.moreToAppend}
              currUserId={this.props.currUserId}
              remove={this.deleteReview}
            />
          </div>
          <div className="top-drinkers">
            <Drinkers drinkers={this.props.showBrewery.top_drinkers} />
          </div>
        </div>
      );
    }
  }
}

export default BreweryShow;
