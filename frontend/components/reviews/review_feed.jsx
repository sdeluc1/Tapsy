import React from 'react';
import ReviewFeedItem from './review_feed_item';

class ReviewFeed extends React.Component {
  constructor(props) {
    super(props);
  }

  filterFeed(){
    let selectedReviews = [];
    if(this.props.feedType === "brews") {
      return this.props.reviews;
    } else {
      this.props.reviews.forEach( (review) => {
        switch(this.props.feedType) {
          case "home":
            //change to reviews of people followed by currentUser
            selectedReviews.push(review);
            break;

          case "user":
            if(review.author_id === this.props.userId) {
              selectedReviews.push(review);
            }
            break;

          case "beer":
            if(review.beer_id === this.props.beerId) {
              selectedReviews.push(review);
            }
            break;

          case "brewery":
            //reviews of all beers by specific brewery
            break;
          default:
            break;
        }
      });
    }
    return selectedReviews;
  }

  render() {
    return(
      <div className="review-feed">
        <header id="review-feed-header">Recent Activity</header>
        <ul className="review-feed-list">
          {
            this.filterFeed().map( (review, idx) => {
              return <ReviewFeedItem key={idx} review={review} />;
            })
          }
        </ul>
      </div>
    );
  }
}

export default ReviewFeed;
