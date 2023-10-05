import React from 'react';

const SearchPostForm = ({ handleSearchSubmit, fetchAllPosts }) => {
  return (
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
  );
};

export default SearchPostForm;
