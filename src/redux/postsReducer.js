import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { findPostById } from 'services/api';

export const requestPosts = createAsyncThunk(
  'posts/get',
  async (query, thunkAPI) => {
    try {
      const searchedPosts = await findPostById(query);

      return searchedPosts; // ЦЕ БУДЕ ЗАПИСАНО В ЕКШИН ПЕЙЛОАД
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  posts: null,
  isLoading: false,
  error: null,
};

const postSlice = createSlice({
  // Ім'я слайсу
  name: 'posts',
  // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE,
  extraReducers: builder =>
    builder.addCase(requestPosts.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(requestPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = [action.payload]; // state.posts = action.payload
    })
    .addCase(requestPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }),
});

export const postsReducer = postSlice.reducer;
