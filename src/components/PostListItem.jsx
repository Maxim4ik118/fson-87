import React from 'react';
import { Link } from 'react-router-dom';

const PostListItem = ({ id, title, userId, body }) => {
  return (
    <li className="postListItem">
      <Link to={`/post-details/${id}`}>
        <span>Id: {id}</span>
        <h3>Title: {title}</h3>
        <h4>User Id: {userId}</h4>
        <p>Body: {body}</p>
      </Link>
    </li>
  );
};

export default PostListItem;
