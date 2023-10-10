import ErrorMessage from 'components/ErrorMessage';
import Loader from 'components/Loader';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { findPostCommentsById } from 'services/api';

const PostCommentsPage = () => {
  const { postId } = useParams();
  const [comments, setComments] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!postId) return;

    const fetchAllPosts = async () => {
      try {
        setIsLoading(true);
        const commentsData = await findPostCommentsById(postId);

        setComments(commentsData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllPosts();
  }, [postId]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {comments !== null && (
        <ul>
          {comments.map(comment => {
            return (
              <li key={comment.id}>
                <h3>Name: {comment.name}</h3>
                <h4>Email: {comment.email}</h4>
                <p>Body: {comment.body}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default PostCommentsPage;
