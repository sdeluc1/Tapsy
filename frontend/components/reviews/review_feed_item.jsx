import React from 'react';

const ReviewFeedItem = (props) => {
  return(
    <li className="main-review-item">
      <div id="review-user-pic"></div>
      <section className="review-item-info">
        <p className="review-item-is-drinking">
          <a href={`#/user/${props.review.author.id}`}>
            <strong>{props.review.author.name}</strong>
          </a>
          <strong> is drinking a </strong>
          <a href={`#/beer/${props.review.beer.id}`}>
            <strong id="is-drinking">{props.review.beer.name}</strong>
          </a>
          <strong> by </strong>
          <a href="#">
            <strong>{props.review.brewery.name}</strong>
          </a>
        </p>
        <div className="review-item-body">
          <strong id="review-item-description">{props.review.description}</strong>
          <strong id="review-item-rating">Rating Here</strong>
        </div>
        <footer className="review-item-time-detail">
          <strong id="created-at">{props.review.created_at} ago</strong>
          <a href="#"><strong id="detail-link">View Detailed Check-in</strong></a>
        </footer>
      </section>
    </li>
  );

};

export default ReviewFeedItem;
