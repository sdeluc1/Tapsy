import React from 'react';

const Comment = (props) => {
  
  return(
    <li className="group comment">
      <div className="main-body">
        <strong id="comment-name">{props.comment.username}: </strong>
        <p id="comment-body">{props.comment.body}</p>
      </div>
      <strong id="timestamp">{props.comment.created_at} ago</strong>
    </li>
  );

};

export default Comment;
