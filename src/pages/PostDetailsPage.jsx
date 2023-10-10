import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetailsPage = () => {
  const { postId } = useParams();

  return (
    <div>
      <h1>PostId: {postId}</h1>
      PostDetailsPage
    </div>
  );
};

export default PostDetailsPage;
