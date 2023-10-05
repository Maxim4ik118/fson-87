import React from 'react';
import PostListItem from './PostListItem';

const PostList = ({ posts }) => {
  const showPosts = Array.isArray(posts) && posts.length;

  return (
    <ul className="postList">
      {showPosts &&
        posts.map(post => {
          return (
            <PostListItem
              id={post.id}
              title={post.title}
              userId={post.userId}
              body={post.body}
              key={post.id}
            />
          );
        })}
    </ul>
  );
};

export default PostList;
