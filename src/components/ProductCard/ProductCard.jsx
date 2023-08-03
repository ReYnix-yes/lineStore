import AddToCartBtn from "../buttons/AddToCartBtn/AddToCartBtn";
import DetailBtn from "../buttons/DetailBtn/DetailBtn";
import styles from "./styles.module.scss";

export const ProductCard = ({ product }) => {
  return (
    <li className={styles.list}>
      <div className={styles.image__wrapper}>
        <img className={styles.image} src={product.image} alt={product.name} />
      </div>
      <div className={styles.content__wrapper}>
        <div className={styles.name__wrapper}>
          <h2 className={styles.name}>{product.name}</h2>
        </div>
        <div className={styles.purchase}>
          <div className={styles.purchase__wrapper}>
            <strong className={styles.price}>{product.price}$</strong>
            <div className={styles.btn__wrapper}>
              <DetailBtn product={product} />
              <AddToCartBtn product={product} />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
