import { createSelector } from '@reduxjs/toolkit';
import { rootReducer } from './store';

const selectProductStore = createSelector(
  rootReducer,
  state => state.productsStore
);

export const selectProducts = createSelector(
  selectProductStore,
  productsStore => productsStore.products
);
export const selectProductsIsLoading = createSelector(
  selectProductStore,
  productsStore => productsStore.isLoading
);
export const selectProductsError = createSelector(
  selectProductStore,
  productsStore => productsStore.error
);
export const selectProductsFilterTerm = createSelector(
  selectProductStore,
  productsStore => productsStore.filterTerm
);
