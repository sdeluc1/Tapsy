import React from 'react';
import BeerHeader from './beer_header';
import ReviewFeed from '../reviews/review_feed';
import AddReviewContainer from '../reviews/add_review_container';
import Drinkers from '../drinkers/drinkers';

class BeerShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalDisplay: {display: 'none' }};
    this.openReviewModal = this.openReviewModal.bind(this);
    this.closeReviewModal = this.closeReviewModal.bind(this);
    this.processReviewModal = this.processReviewModal.bind(this);
  }

  openReviewModal(){
    this.setState({ modalDisplay: { display: 'block' } });
  }

  closeReviewModal(){
    this.setState({ modalDisplay: { display: 'none' } });
  }

  processReviewModal(){
    this.props.updateReviews(this.props.showBeer.id, () => {
      this.setState({ modalDisplay: { display: 'none' } });
    });
  }

  render(){
    debugger
    if (this.props.loadingBeer) {
      return(
        <div></div>
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
            <ReviewFeed
              feedType={this.props.feedType}
              reviews={this.props.reviews}
              beerId={this.props.showBeer.id}
              />
          </div>
        <div onClick={this.closeReviewModal} id="modal-overlay" style={this.state.modalDisplay}></div>
          <div className="add-review-modal" style={this.state.modalDisplay}>
            <AddReviewContainer
              beerId={this.props.showBeer.id}
              close={this.closeReviewModal}
              process={this.processReviewModal}
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
