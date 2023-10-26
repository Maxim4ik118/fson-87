import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  requestAddProduct,
  requestDeleteProduct,
  requestProducts,
} from 'services/api';

export const fetchProducts = createAsyncThunk(
  'products/getAll',
  async (_, thunkAPI) => {
    try {
      const products = await requestProducts();

      return products; // ЦЕ БУДЕ ЗАПИСАНО В ЕКШИН ПЕЙЛОАД
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addProduct = createAsyncThunk(
  'products/add',
  async (newProduct, thunkAPI) => {
    try {
      const product = await requestAddProduct(newProduct);

      return product; // ЦЕ БУДЕ ЗАПИСАНО В ЕКШИН ПЕЙЛОАД
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  'products/delete',
  async (productId, thunkAPI) => {
    try {
      const deletedProduct = await requestDeleteProduct(productId);

      return deletedProduct; // ЦЕ БУДЕ ЗАПИСАНО В ЕКШИН ПЕЙЛОАД
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  products: null,
  isLoading: false,
  error: null,
  filterTerm: '',
};

const productsSlice = createSlice({
  // Ім'я слайсу
  name: 'products',
  // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE,
  reducers: {
    setFilterTerm: (state, action) => {
      state.filterTerm = action.payload;
    }
  },
  extraReducers: builder =>
    builder
      .addCase(fetchProducts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(addProduct.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products.unshift(action.payload);
        // state.products = [action.payload, ...state.products];
        // state.products.push(action.payload);
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(deleteProduct.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = state.products.filter(
          product => product.id !== action.payload.id
        );
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { setFilterTerm } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
