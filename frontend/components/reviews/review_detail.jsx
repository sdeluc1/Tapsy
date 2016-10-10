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
      </div>
    );
  }

};

export default ReviewDetail;
