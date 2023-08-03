import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { useDispatch } from "react-redux";
import {
  addProductToCart,
  decrementProductCart,
  deleteProductFromCart,
} from "../../../store/reducers/cartReducer";

function Count({ product }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.count__wrapper}>
      <button
        className={styles.count__btn}
        onClick={() => dispatch(addProductToCart(product))}
      >
        +
      </button>
      <p>{product.count}</p>
      <button
        className={styles.count__btn}
        onClick={() => dispatch(decrementProductCart(product))}
      >
        -
      </button>
    </div>
  );
}

export default Count;
