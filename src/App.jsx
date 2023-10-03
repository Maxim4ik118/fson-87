import { useEffect, useState } from 'react';

import { StyledAppContainer } from 'App.styled';
import { fetchPosts, findPostById } from 'services/api';
import { ColorRing } from 'react-loader-spinner';
import DetailsSection from 'components/DetailsSection';

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

  // const [options, setOptions] = useState({ abuba: 1, aboba: 1, grisha: 1 });

  // const handleAddOption = (optionName) => {
  //   setOptions((prevState) => ({
  //     ...prevState,
  //      [optionName]: prevState[optionName] + 1,
  //    }))
  // }
  // handleAddOption("grisha");


  useEffect(() => {
    fetchAllPosts();
  }, []);

  useEffect(() => {
    if(!searchedPostId) return;

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



  const showPosts = Array.isArray(posts) && posts.length;
  return (
    <>
      <StyledAppContainer>
        <h1 className="title">App Title</h1>
        <DetailsSection />

        <form onSubmit={handleSearchSubmit}>
          <label>
            <p>Enter post ID to find in database:</p>
            <input type="text" name="searchPostId" placeholder="Enter postID" />
            <button type="submit">Search</button>
            <button onClick={() => fetchAllPosts()} type="button">
              Reset
            </button>
          </label>
        </form>

        {isLoading && (
          <div>
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
          </div>
        )}
        {error && <p className="error">{error}</p>}

        <ul className="postList">
          {showPosts &&
            posts.map(post => {
              return (
                <li key={post.id} className="postListItem">
                  <span>Id: {post.id}</span>
                  <h3>Title: {post.title}</h3>
                  <h4>User Id: {post.userId}</h4>
                  <p>Body: {post.body}</p>
                </li>
              );
            })}
        </ul>
      </StyledAppContainer>
    </>
  );
};
