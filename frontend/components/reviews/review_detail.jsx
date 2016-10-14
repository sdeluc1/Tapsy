import React from 'react';
import Comment from '../comments/comment';
import CommentForm from '../comments/comment_form';
import { Link } from 'react-router';

const ReviewDetail = (props) => {
  if(props.reviewLoading){
    return <div></div>;
  } else {
    return(
      <div className="main-review-detail">
        <div className="group main-review-content">
          <div className="review-box">
            <header className="review-detail-user">
              <div id="user-avatar"></div>
              <div id="name-count">
                <strong id="user-name">{props.showReview.author.name}</strong>
                <strong id="checkins">{props.showReview.author_count} Check-ins</strong>
              </div>
            </header>

            <div className="main-rev-detail-content">

              <div id="review-detail-content">
                <div id="content-top">
                  <div id="review-beer-icon"></div>
                  <div className="beer-brewery">
                    <Link to={`/beer/${props.showReview.beer.id}`}>
                      <strong id="beer-name">{props.showReview.beer.name}</strong>
                    </Link>
                    <strong id="brewery-name">{props.showReview.brewery.name}</strong>
                  </div>
                </div>
                <div id="content-bottom">
                  <div id="review-detail-description">{props.showReview.description}</div>
                  <div id="review-detail-rating">Rating: {props.showReview.rating}</div>
                </div>
                <footer className="group rev-content-footer">
                  <span id="time-stamp">{props.showReview.created_at} ago</span>
                </footer>
              </div>
              <div className="rev-detail-comments">
                <ul className="detail-comment-list">
                  {
                    props.showReview.comments.map( (comment, idx) => {
                      return <Comment key={idx} comment={comment} />;
                    })
                  }
                </ul>
              </div>

            </div>

            <div className="group rev-detail-comment-form">
              <CommentForm
                reviewId={props.showReview.id}
                addComment={props.addComment}
                getComments={props.requestComments}
                reloadReview={props.requestReview}
              />
            </div>
          </div>
          <div className="review-pic">
            <img id="review-image" src={ props.showReview.image_url } />
          </div>
        </div>
      </div>
    );
  }

};

export default ReviewDetail;
