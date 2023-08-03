import { useNavigate } from "react-router-dom";
import { FaInfoCircle } from "react-icons/fa";
import Button from '@mui/material/Button';
import styles from "./styles.module.scss"

const DetailBtn = ({ product }) => {
    const navigate = useNavigate();
  return (
    <Button variant="contained" disableElevation className={styles.button} onClick={() => navigate(`/product-details/${product.id}`)}>
      <FaInfoCircle color="white" size={20}/>
    </Button>
  );
};

export default DetailBtn;
