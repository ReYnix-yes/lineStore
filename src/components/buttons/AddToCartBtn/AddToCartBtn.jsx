import { FaShoppingCart } from "react-icons/fa";
import { addProductToCart } from "../../../store/reducers/cartReducer";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";

import styles from "./styles.module.scss";

const AddToCartBtn = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <Button 
      color="success"
      variant="contained"
      disableElevation
      className={styles.buy__btn}
      onClick={() => dispatch(addProductToCart(product))}
    >
      <FaShoppingCart size={20} color="white" />
    </Button>
  );
};

export default AddToCartBtn;
