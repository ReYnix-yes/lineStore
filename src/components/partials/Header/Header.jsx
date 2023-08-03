import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectAmountProductsInCart } from "../../../store/selectors/cartSelectors";
import { selectSearchValue } from "../../../store/selectors/productsSelectors";
import { setSearchValue } from "../../../store/reducers/productsReducer";
import { FaShoppingCart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import styles from "./styles.module.scss";
import { set } from "lodash";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const Header = ({ cart = true, search = true }) => {
  const dispatch = useDispatch();

  const amountProductsInCart = useSelector(selectAmountProductsInCart);
  const searchValue = useSelector(selectSearchValue);
  const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    padding: '0 4px',
  },
}));

const StyledShoppingCartIcon = styled(ShoppingCartIcon)(({ theme }) => ({
  fontSize: 32, // Указать нужный размер значка
}));

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link className={styles.home__container} to="/">
          <h1 className={styles.home}>LineStore</h1>
        </Link>
        <div className={styles.search}>
          
          {search && (
            <input
              className={styles.input}
              onChange={(e) => dispatch(setSearchValue(e.target.value))}
              value={searchValue}
              type="text"
            />
          )}
        </div>
        {cart && (
          <Link className={styles.amount_products_cart} to="/cart">
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={amountProductsInCart} color="success">
                <StyledShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
