import React from 'react';
import ReviewFeedItem from './review_feed_item';

class ReviewFeed extends React.Component {
  constructor(props) {
    super(props);
  }

  filterFeed(){
    const selectedReviews = this.props.reviews.map( (review) => {

    });
  }

  render() {
    return(
      <div className="review-feed">
        THIS IS A REVIEW FEED!
        <ul>
          {
            this.props.reviews.map( (review, idx) => {
              return <ReviewFeedItem key={idx} review={review} />;
            })
          }
        </ul>
      </div>
    );
  }
}

export default ReviewFeed;
