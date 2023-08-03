import { createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import { filterProductsBySearchValue, filterProductsByType } from "../../utils/productsUtils";

const selectState = (state) => state.products;

export const selectProducts = createSelector(
  selectState,
  (state) => state.products
);

export const selectSearchValue = createSelector(
  selectState,
  (state) => state.searchValue
);

export const selectIsProductsLoading = createSelector(
  selectState,
  (state) => state.isProductsLoading
);

export const selectCheckedTypes = createSelector(
  selectState,
  (state) => state.checkedTypes
);

export const selectFilteredProducts = createSelector(
  selectProducts,
  selectSearchValue,
  selectCheckedTypes,
  (products, searchValue, checkedTypes) => {
    const FILTER_CALLBACKS = [
      (products) => filterProductsBySearchValue(products, searchValue),
      (products) => filterProductsByType(products, checkedTypes),
    ];

    return FILTER_CALLBACKS.reduce((products, callback) => {
      return callback(products);
    }, products);
  }
);



export const selectProductDetails = createSelector(
  selectState,
  (state) => state.productDetails
);

export const selectIsProductDetailsLoading = createSelector(
  selectState,
  (state) => state.isProductDetailsLoading
);