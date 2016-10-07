import React from 'react';

const ReviewFeedItem = (props) => {

  return(
    <li>
      {props.review.description}
    </li>
  );

};

export default ReviewFeedItem;
