import React from 'react';
import BeerHeader from './beer_header';
import ReviewFeed from '../reviews/review_feed';
import AddReviewContainer from '../reviews/add_review_container';
import Drinkers from '../drinkers/drinkers';
import Loader from 'react-loader';

class BeerShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalDisplay: {display: 'none' }};
    this.openReviewModal = this.openReviewModal.bind(this);
    this.closeReviewModal = this.closeReviewModal.bind(this);
  }

  openReviewModal(){
    this.setState({ modalDisplay: { display: 'block' } });
  }

  closeReviewModal(){
    // this.props.getBeer(this.props.showBeer.id);
    this.props.getReviews(this.props.showBeer.id);
    this.setState({ modalDisplay: { display: 'none' } });
  }

  render(){
    if (this.props.loadingBeer) {
      return(
        <div>
          <Loader />
        </div>
      );
    } else {
      return(
        <div className="group main-show-beer">
          <div className="left-content">
            <BeerHeader
              beer={this.props.showBeer}
              openReviewModal={this.openReviewModal}
              closeReviewModal={this.closeReviewModal}
              />
            <Loader loaded={!this.props.loadingReview}>
              <ReviewFeed
                feedType={this.props.feedType}
                reviews={this.props.reviews}
                beerId={this.props.showBeer.id}
                loading={this.props.loadingReview}
                />
            </Loader>
          </div>
        <div onClick={this.closeReviewModal} id="modal-overlay" style={this.state.modalDisplay}></div>
          <div className="add-review-modal" style={this.state.modalDisplay}>
            <AddReviewContainer
              beerId={this.props.showBeer.id}
              close={this.closeReviewModal}
            />
          </div>
          <div className="top-drinkers">
            <Drinkers drinkers={this.props.showBeer.top_drinkers} />
          </div>
        </div>
      );
    }
  }


}

export default BeerShow;
