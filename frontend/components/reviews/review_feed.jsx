import React from 'react';
import ReviewFeedItem from './review_feed_item';

class ReviewFeed extends React.Component {
  constructor(props) {
    super(props);
  }

  filterFeed(){
    if(this.props.formType === "brews") {
      return this.props.reviews;
    } else {
      const selectedReviews = this.props.reviews.map( (review) => {
        switch(this.props.formType) {
          case "home":
          //reviews of people followed by currentUser
          break;
          case "user":
          //reviews by specific user
          break;
          case "beer":
          //reviews of specific beer
          break;
          case "brewery":
          //reviews of all beers by specific brewery
          break;
        }
      });
    }
  }

  render() {
    return(
      <div className="review-feed">
        <header id="review-feed-header">Recent Activity</header>
        <ul className="review-feed-list">
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
