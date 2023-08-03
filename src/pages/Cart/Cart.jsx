import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/partials/Header/Header";
import {
  selectCartList,
  selectTotalPrice,
} from "../../store/selectors/cartSelectors";
import { deleteProductFromCart } from "../../store/reducers/cartReducer";
import { useState } from "react";
import Count from "../../components/partials/count/Count";
import styles from "./styles.module.scss";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  AppBar,
  Toolbar,
} from "@mui/material";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cartList = useSelector(selectCartList);
  const totalPrice = useSelector(selectTotalPrice);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Link className={styles.header__title} to="/">
            <Typography variant="h6">Home</Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <main className={styles.main}>
        {/* <Typography variant="h1" className={styles.title}>
          Cart
        </Typography> */}
        <div className={styles.list__wrapper}>
          <div className={styles.card__title__wrapper}>
            <h1>Card:</h1>
          </div>
          <ul className={styles.product__list}>
            {cartList.map((product) => (
              <li className={styles.product} key={product.id}>
                <div>
                  <Card className={styles.product__wrapper}>
                    <CardMedia
                      className={styles.image}
                      component="img"
                      src={product.image}
                      alt={product.name}
                      onClick={() => setSelectedProduct(product)}
                    />
                    <CardContent>
                      <Count product={product} />
                      <h2>{product.name}</h2>
                      <h2>Price: {product.price}</h2>
                    </CardContent>
                  </Card>
                </div>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => dispatch(deleteProductFromCart(product.id))}
                >
                  X
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.purchase}>
          <h2 className={styles.totalPrice}>Total Price: {totalPrice}$</h2>
          <div className={styles.buyNow__btn}>
            <Button
              className={styles.buyNow__btn}
              color="success"
              disableElevation
              variant="contained"
            >
              Buy now
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Cart;
