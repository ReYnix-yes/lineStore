import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCartList } from "../store/reducers/cartReducer";
import { selectCartList } from "../store/selectors/cartSelectors";

const useAppInit = () => {
  const dispatch = useDispatch();
  const cartList = useSelector(selectCartList);

  const restoreData = () => {
    const cachedCartList = localStorage.getItem("cartList");

    if (cachedCartList) {
      dispatch(setCartList(JSON.parse(cachedCartList)));
    }
  };

  useEffect(() => {
    restoreData();
  }, [])
  
  useEffect(() => {
    const saveData = () => {
      localStorage.setItem("cartList", JSON.stringify(cartList));
    };

    window.addEventListener("beforeunload", saveData);
  }, [cartList]);
};

export default useAppInit;
