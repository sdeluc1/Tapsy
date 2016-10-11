import React from 'react';

const ReviewDetail = (props) => {
  if(props.reviewLoading){
    return <div></div>;
  } else {
    return(
      <div className="main-review-detail">
        <header className="review-detail-user">
          <div id="user-avatar"></div>
          <div id="name-count">
            <strong id="user-name">{props.showReview.author.name}</strong>
            <strong id="checkins">{props.showReview.author_count} Check-ins</strong>
          </div>
        </header>

        <div id="review-detail-content">
          <div id="content-top">
            <div id="review-beer-icon"></div>
            <div className="beer-brewery">
              <strong id="beer-name">{props.showReview.beer.name}</strong>
              <strong id="brewery-name">{props.showReview.brewery.name}</strong>
            </div>
          </div>
          <div id="content-bottom">
            <div id="review-detail-description">{props.showReview.description}</div>
            <div id="review-detail-rating">Rating: {props.showReview.rating}</div>
          </div>
          <footer className="rev-content-footer">
            <span id="time-stamp">{props.showReview.created_at} ago</span>
          </footer>
        </div>
      </div>
    );
  }

};

export default ReviewDetail;
