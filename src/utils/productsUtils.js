import { uniq } from "lodash";
import { setCheckedTypes } from "../store/reducers/productsReducer";

export const isProductInCart = (list, productItem) =>
  !!list.find((product) => product.id === productItem.id);

export const removeProductFromCart = (list, id) =>
  list.filter((product) => product.id !== id);

export const getAllTypesInProductsList = (list) =>
  uniq(list.map((product) => product.type));

export const filterProductsBySearchValue = (products, searchValue) =>
  products.filter(
    (product) =>
      product.name.toLowerCase().search(searchValue.toLowerCase()) !== -1
  );

export const filterProductsByType = (products, checkedTypes) =>
  products.filter((product) => checkedTypes.includes(product.type));
