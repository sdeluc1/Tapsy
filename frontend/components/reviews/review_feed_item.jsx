import React from 'react';

const ReviewFeedItem = (props) => {

  return(
    <li className="main-review-item">
      <div id="review-user-pic"></div>
      <section className="review-item-info">
        <p className="review-item-is-drinking">
          <a href={`#/user/${props.review.author_id}`}>
            <strong>{props.review.author_name}</strong>
          </a>
          <strong> is drinking a </strong>
          <a href={`#/beer/${props.review.beer_id}`}>
            <strong id="is-drinking">{props.review.beer_name}</strong>
          </a>
          <strong> by </strong>
          <a href={`#/brewery/${props.review.brewery.id}`}>
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
