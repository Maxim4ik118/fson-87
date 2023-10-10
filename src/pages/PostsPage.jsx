import ErrorMessage from 'components/ErrorMessage';
import Loader from 'components/Loader';
import PostList from 'components/PostList';
import React, { useEffect, useState } from 'react';
import { fetchPosts } from 'services/api';

const PostsPage = () => {
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        setIsLoading(true);
        const postsData = await fetchPosts();

        setPosts(postsData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAllPosts();
  }, []);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}

      <PostList posts={posts} />
    </div>
  );
};

export default PostsPage;
