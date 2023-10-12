import { ReactComponent as IconSearch } from 'assets/images/search.svg';
import ErrorMessage from 'components/ErrorMessage';
import Loader from 'components/Loader';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { findPostById } from 'services/api';

// (async () => { // -- IIFE (Immediately invoked function expression)
//   try {
//     setIsLoading(true);
//     const postData = await findPostById(query);

//     setPosts([postData]);
//   } catch (error) {
//     setError(error.message);
//   } finally {
//     setIsLoading(false);
//   }
// })()

const SearchPage = () => {
  // /search?query=56
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;

    const fetchAllPosts = async () => {
      try {
        setIsLoading(true);
        const postData = await findPostById(query);

        setPosts([postData]);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllPosts();
  }, [query]);

  const handleFormSubmit = event => {
    event.preventDefault();
    const searchValue = event.currentTarget.elements.searchPostId.value;

    setSearchParams({ query: searchValue });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          <p>Search post by id:</p>
          <input type="text" name="searchPostId" required />
        </label>
        <button type="submit">
          <IconSearch />
        </button>
      </form>

      <section>
        {isLoading && <Loader />}
        {error && <ErrorMessage message={error} />}
        {posts !== null &&
          posts.map(post => (
            <Link
              state={{ from: location }}
              to={`/post-details/${post.id}`}
              key={post.id}
            >
              <span>Post Id: {post.id}</span>
              <h2>Post Title: {post.title}</h2>
              <p>Post Body: {post.body}</p>
            </Link>
          ))}
      </section>
    </div>
  );
};

export default SearchPage;
