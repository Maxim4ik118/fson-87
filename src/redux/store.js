import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { postDetailsReducer } from './postDetailReducer';
import { postsReducer } from './postsReducer';
import { productsReducer } from './productReducer';

export const rootReducer = combineReducers({
  postDetails: postDetailsReducer,
  postsData: postsReducer,
  productsStore: productsReducer,
})

export const store = configureStore({
  reducer: rootReducer,
});
