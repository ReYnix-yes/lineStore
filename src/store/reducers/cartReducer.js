import { createSlice } from "@reduxjs/toolkit";
import { isProductInCart, removeProductFromCart } from "../../utils/productsUtils";

const initialState = {
  cartList: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const isAlreadyInCart = isProductInCart(state.cartList, action.payload);

      if (isAlreadyInCart) {
        state.cartList.map((product) => {
          if (product.id !== action.payload.id) return product;

          product.count++;
          return product;
        });
      } else {
        state.cartList.push({ ...action.payload, count: 1 });
      }
    },
    decrementProductCart: (state, action) => {
      if (action.payload.count > 1) {
        state.cartList.map((product) => {
          if (product.id !== action.payload.id) return product;

          product.count--;
          return product;
        });
      } else {
        state.cartList = removeProductFromCart(
          state.cartList,
          action.payload.id
        );
      }
    },
    setCartList: (state, action) => {
      state.cartList = action.payload;
    },
    deleteProductFromCart: (state, action) => {
      const id = action.payload;
      state.cartList = removeProductFromCart(state.cartList, id);
    },
  },
});

const { reducer, actions } = cartSlice;

export const {
  addProductToCart,
  setCartList,
  deleteProductFromCart,
  decrementProductCart,
} = actions;

export default reducer;
