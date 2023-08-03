import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProduct, getProducts } from "../../api/productsApi";
import { getAllTypesInProductsList } from "../../utils/productsUtils";

const initialState = {
  products: [],
  isProductsLoading: false,
  searchValue: "",
  checkedTypes: [],
  productDetails: null,
  isProductDetailsLoading: false,
};

export const getProductsThunk = createAsyncThunk(
  "products/getProductsThunk",
  async () => getProducts()
);

export const getProductThunk = createAsyncThunk(
  "products/getProductThunk",
  async (id) => getProduct(id)
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setCheckedTypes: (state, action) => {
      state.checkedTypes = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductsThunk.pending, (state) => {
      state.isProductsLoading = true;
    });
    builder.addCase(getProductsThunk.fulfilled, (state, action) => {
      state.products = action.payload.data;
      state.checkedTypes = getAllTypesInProductsList(action.payload.data)
      state.isProductsLoading = false;
    });
    builder.addCase(getProductsThunk.rejected, (state, action) => {
      state.isProductsLoading = false;
    });
    builder.addCase(getProductThunk.pending, (state) => {
      state.isProductDetailsLoading = true;
    });
    builder.addCase(getProductThunk.fulfilled, (state, action) => {
      state.productDetails = action.payload.data;
      state.isProductDetailsLoading = false;
    });
    builder.addCase(getProductThunk.rejected, (state, action) => {
      state.isProductDetailsLoading = false;
    });
  },
});

const { reducer } = productsSlice;
const { actions } = productsSlice;

export const { setSearchValue, setCheckedTypes } = actions;

export default reducer;
