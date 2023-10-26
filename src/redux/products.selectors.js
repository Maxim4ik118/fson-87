import { createSelector } from '@reduxjs/toolkit';

const selectProductsStore = state => state.productsStore;

export const selectProducts = createSelector(
  selectProductsStore,
  productsStore => productsStore.products
);
export const selectProductsIsLoading = createSelector(
  selectProductsStore,
  productsStore => productsStore.isLoading
);
export const selectProductsError = createSelector(
  selectProductsStore,
  productsStore => productsStore.error
);
export const selectProductsFilterTerm = createSelector(
  selectProductsStore,
  productsStore => productsStore.filterTerm
);
