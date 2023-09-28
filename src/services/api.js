import axios from 'axios';

export const fetchPosts = async () => {
  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/posts/'
  );
  return data;
};

export const findPostById = async postId => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  return data;
};
