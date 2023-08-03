import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { isObject } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { getProductThunk } from "../../store/reducers/productsReducer";
import {
  selectIsProductDetailsLoading,
  selectProductDetails,
} from "../../store/selectors/productsSelectors";
import Header from "../../components/partials/Header/Header";
import styles from "./styles.module.scss";
import AddToCartBtn from "../../components/buttons/AddToCartBtn/AddToCartBtn";

function ProductDetails() {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const product = useSelector(selectProductDetails);
  const isProductsLoading = useSelector(selectIsProductDetailsLoading);

  useEffect(() => {
    dispatch(getProductThunk(productId));
  }, [dispatch, productId]);

  return (
    <>
      <Header cart={true} search={false} />
      {isProductsLoading && "loading..."}
      {!isProductsLoading && isObject(product) && (
        <div className={styles.product}>
          <div className={styles.product__wrapper}>
            <img className={styles.image} src={product.image} />
            <div className={styles.product__about}>
              <div>
                <h1>{product.name}</h1>
                <h2>Company: {product.company}</h2>
              </div>
              <div>
                <h2>Category: {product.category}</h2>
                <h2>Type: {product.type}</h2>
              </div>
              <div className={styles.description}>
                <h4>{product.description}</h4>
              </div>
              <AddToCartBtn product={product}/>
            </div>
          </div>
          
        </div>
      )}
      {!isProductsLoading && !isObject(product) && "id не верный"}
    </>
  );
}

export default ProductDetails;
