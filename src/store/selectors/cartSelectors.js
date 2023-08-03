import { createSelector } from "@reduxjs/toolkit";

const selectState = (state) => state.cart;

export const selectCartList = createSelector(
  selectState,
  (state) => state.cartList
);

export const selectAmountProductsInCart = createSelector(
  selectCartList,
  (cartList) => cartList.length
);

export const selectTotalPrice = createSelector(selectCartList, (cartList) =>
  cartList.reduce((sum, product) => sum + product.price * product.count, 0)
);
