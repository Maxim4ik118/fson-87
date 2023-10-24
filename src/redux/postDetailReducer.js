import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { findPostById } from 'services/api';

export const requestPostDetails = createAsyncThunk(
  'postDetails/get',
  async (postId, thunkAPI) => {
    try {
      const postData = await findPostById(postId);

      return postData; // ЦЕ БУДЕ ЗАПИСАНО В ЕКШИН ПЕЙЛОАД
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  postDetailsData: null,
  isLoading: false,
  error: null,
};

const postDetailsSlice = createSlice({
  // Ім'я слайсу
  name: 'postDetails',
  // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE,
  extraReducers: builder =>
    builder.addCase(requestPostDetails.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(requestPostDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.postDetailsData = action.payload;
    })
    .addCase(requestPostDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }),
});

export const postDetailsReducer = postDetailsSlice.reducer;
