import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

import ErrorMessage from 'components/ErrorMessage';
import Loader from 'components/Loader';

import { requestPosts } from 'redux/postsReducer';

import { ReactComponent as IconSearch } from 'assets/images/search.svg';


const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const posts = useSelector(state => state.postsData.posts);
  const isLoading = useSelector(state => state.postsData.isLoading);
  const error = useSelector(state => state.postsData.error);
  const dispatch = useDispatch();

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;

    dispatch(requestPosts(query));
  }, [query, dispatch]);

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
