import { useEffect, useState } from 'react';

import { StyledAppContainer } from 'App.styled';
import { fetchPosts, findPostById } from 'services/api';
import { ColorRing } from 'react-loader-spinner';
import DetailsSection from 'components/DetailsSection';
import PostListItem from 'components/PostListItem';
import PostList from 'components/PostList';
import Loader from 'components/Loader';
import ErrorMessage from 'components/ErrorMessage';
import SearchPostForm from 'components/SearchPostForm';
import UseRefExample from 'components/UseRefExample';
import UseMemoExapmle from 'components/UseMemoExapmle';

export const App = () => {
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchedPostId, setSearchedPostId] = useState(null);

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

  const handleSearchSubmit = event => {
    event.preventDefault();

    const searchedPostIdValue = event.currentTarget.elements.searchPostId.value;

    setSearchedPostId(searchedPostIdValue);

    event.currentTarget.reset();
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);

  useEffect(() => {
    if (!searchedPostId) return;

    const fetchPostById = async () => {
      try {
        setIsLoading(true);
        const post = await findPostById(searchedPostId);

        setPosts([post]);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPostById();
  }, [searchedPostId]);

  return (
    <>
      <StyledAppContainer>
        <h1 className="title">App Title</h1>
        {/* <DetailsSection />
        <SearchPostForm
          handleSearchSubmit={handleSearchSubmit}
          fetchAllPosts={fetchAllPosts}
        /> */}

        {/* {isLoading && <Loader />}
        {error && <ErrorMessage message={error} />} */}

        {/* <PostList posts={posts} /> */}

        {/* <UseRefExample /> */}
        <UseMemoExapmle />
      </StyledAppContainer>
    </>
  );
};
