import React from 'react';
import ReviewFeed from '../reviews/review_feed';
import TopBeers from '../top_beers/top_beers';
import Loader from 'react-loader';

class BrewsIndex extends React.Component {
  constructor(props){
    super(props);

    this.deleteReview = this.deleteReview.bind(this);
  }

  deleteReview(id) {
    this.props.removeReview(id);
    this.props.moreReviews(0, false);
    this.setState({});
  }

  render() {
    if(this.props.loadingReviews || this.props.loadingBeer || this.props.currUser === null){
      return <div><Loader /></div>;
    } else {
      return(
        <div className="main-brews-page">
          <div className="left-content">
            <ReviewFeed
              reviews={this.props.reviews}
              feedType={this.props.feedType}
              moreReviews={this.props.moreReviews}
              moreToAppend={this.props.moreToAppend}
              currUserId={this.props.currUser.id}
              remove={this.deleteReview}
            />
          </div>
          <div className="top-beers">
            <TopBeers topBeers={this.props.beers} />
          </div>
        </div>
      );
    }
  }

};

export default BrewsIndex;
