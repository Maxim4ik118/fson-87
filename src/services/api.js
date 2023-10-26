import axios from 'axios';

const postsInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

const productsInstance = axios.create({
  baseURL: 'https://653a98582e42fd0d54d42b11.mockapi.io/',
});

export const fetchPosts = async () => {
  const { data } = await postsInstance.get('/posts/');
  return data;
};

export const findPostById = async postId => {
  const { data } = await postsInstance.get(`/posts/${postId}`);
  return data;
};

export const findPostCommentsById = async postId => {
  const { data } = await postsInstance.get(`/posts/${postId}/comments`);
  return data;
};

// ------------------------ PRODUCTS ------------------------------

export const requestProducts = async () => {
  const { data } = await productsInstance.get('/product');
  return data;
};

export const requestAddProduct = async (newProduct) => {
  const { data } = await productsInstance.post('/product', newProduct);
  return data;
};

export const requestDeleteProduct = async (productId) => {
  const { data } = await productsInstance.delete(`/product/${productId}`);
  return data;
};
