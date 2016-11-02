import React from 'react';
import { Link } from 'react-router';
import Comment from '../comments/comment';

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

  const ratingVal = () => {
    const percent = props.review.rating / 5;
    const pixels = (percent * 20) * 30;
    return pixels;
  };

  const ratingCaps = {
    backgroundImage: "url('https://s3.amazonaws.com/tapsy-pro/reviews/images/ratings.png')",
    backgroundPosition: `0 -${ratingVal()}px`,
    backgroundSize: "149px 630px"
  };

  const removeIfCurrUser = () => {
    if(props.currUserId == props.review.author_id){
      return <strong id="feed-delete-review" onClick={() => props.removeReview(props.review.id)}>Delete Check-in</strong>;
    }
  }

  return(
    <li className="main-review-item">
      <img id="review-user-pic" src={props.review.author_avatar}/>
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
          <strong id="review-item-rating" style={ratingCaps}></strong>
        </div>
        <div className="photo-container">
          {reviewPhoto()}
        </div>

        <footer className="review-item-time-detail">
          <strong id="created-at">{props.review.created_at} ago</strong>
          <Link to={`/reviews/${props.review.id}`}><strong id="detail-link">View Detailed Check-in</strong></Link>
          {removeIfCurrUser()}
        </footer>

        <ul className="comment-list">
          {
            props.review.comments.map( (comment, idx) => {
              return <Comment key={idx} comment={comment} />;
            })
          }
        </ul>
      </section>
    </li>
  );

};

export default ReviewFeedItem;
