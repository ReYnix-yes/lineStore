import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductsThunk,
  setCheckedTypes,
} from "../../store/reducers/productsReducer";
import {
  selectFilteredProducts,
  selectIsProductsLoading,
  selectCheckedTypes,
  selectProducts,
} from "../../store/selectors/productsSelectors";
import ProductCard from "../../components/ProductCard/ProductCard";
import Header from "../../components/partials/Header/Header";
import { getAllTypesInProductsList } from "../../utils/productsUtils";

import styles from "./styles.module.scss";

import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const Home = () => {
  const dispatch = useDispatch();
  const rowProducts = useSelector(selectProducts);
  const products = useSelector(selectFilteredProducts);
  const isProductsLoading = useSelector(selectIsProductsLoading);
  const checkedTypes = useSelector(selectCheckedTypes);

  const allTypes = getAllTypesInProductsList(rowProducts);

  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);

  const toggleTypeChecked = (e, type) => {
    const {
      target: { checked },
    } = e;

    checked
      ? dispatch(setCheckedTypes([...checkedTypes, type]))
      : dispatch(
          setCheckedTypes(checkedTypes.filter((typeItem) => typeItem !== type))
        );
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.checkbox__wrapper}>
            <h3 className={styles.filter__title}>Filters:</h3>
          <FormControl component="fieldset">
            <FormGroup aria-label="position" column>
              {allTypes.map((type) => (
                <FormControlLabel
                  key={type}
                  value={type}
                  control={
                    <Checkbox
                      checked={checkedTypes.includes(type)}
                      onChange={(e) => toggleTypeChecked(e, type)}
                      style={{ color: "white" }}
                    />
                  }
                  label={type}
                  labelPlacement="end"
                  style={{ color: "white" }}
                />
              ))}
            </FormGroup>
          </FormControl>
        </div>
        <div className={styles.all__products}>
          {isProductsLoading ? (
            "loading..."
          ) : (
            <ul className={styles.products}>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </ul>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
