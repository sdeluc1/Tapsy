import React from 'react';
import { Link } from 'react-router';

const ReviewFeedItem = (props) => {

  const reviewPhoto = () => {
    if(props.review.image_url.includes("genericbeercan.jpg")){
      return;
    } else {
      return(
        <div className="review-item-photo">
          <Link to={`/reviews/${props.review.id}`}>
            <img id="item-pic" src={props.review.image_url} />
          </Link>
        </div>
      );
    }
  };

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
          <strong id="review-item-rating">Rating: {props.review.rating}</strong>
        </div>

        {reviewPhoto()}

        <footer className="review-item-time-detail">
          <strong id="created-at">{props.review.created_at} ago</strong>
          <Link to={`/reviews/${props.review.id}`}><strong id="detail-link">View Detailed Check-in</strong></Link>
        </footer>
      </section>
    </li>
  );

};

export default ReviewFeedItem;
