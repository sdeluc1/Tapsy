import React from 'react';
import { Link } from 'react-router';

const Comment = (props) => {
  debugger
  return(
    <li className="group comment">
      <div className="main-body">
        <Link to={`/user/${props.comment.user_id}`}>
          <img id="comment-avatar" src={props.comment.avatar}/>
          <strong id="comment-name">{props.comment.username}: </strong>
        </Link>
        <p id="comment-body">{props.comment.body}</p>
      </div>
      <strong id="timestamp">{props.comment.created_at} ago</strong>
    </li>
  );

};

export default Comment;
