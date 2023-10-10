import React, { useEffect, useState } from 'react';
import { NavLink, Route, Routes, useParams } from 'react-router-dom';
import PostCommentsPage from './PostCommentsPage';
import { findPostById } from 'services/api';
import Loader from 'components/Loader';
import ErrorMessage from 'components/ErrorMessage';

const PostDetailsPage = () => {
  const { postId } = useParams();
  const [postDetails, setPostDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!postId) return;

    const fetchAllPosts = async () => {
      try {
        setIsLoading(true);
        const postData = await findPostById(postId);

        setPostDetails(postData);
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
      {postDetails !== null && (
        <div>
          <h2>Post Title: {postDetails.title}</h2>
          <p>Post Body: {postDetails.body}</p>
        </div>
      )}

      <div>
        <NavLink to="comments" className="header-link">
          Comments
        </NavLink>
      </div>

      <Routes>
        <Route path="comments" element={<PostCommentsPage />} />
      </Routes>
    </div>
  );
};

export default PostDetailsPage;
