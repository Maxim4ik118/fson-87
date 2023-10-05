import React, { useContext } from 'react';

import { DetailsContext } from 'context/DetaisContext';

const PostListItem = ({ id, title, userId, body }) => {
  const { todayDate, setShowDetails } = useContext(DetailsContext);

  return (
    <li className="postListItem">
      <strong>Today date: {todayDate}</strong>
      <br />
      <span>Id: {id}</span>
      <h3>Title: {title}</h3>
      <h4>User Id: {userId}</h4>
      <p>Body: {body}</p>
      <button onClick={() => setShowDetails(prev => !prev)}>
        Toggle site details
      </button>
    </li>
  );
};

export default PostListItem;
