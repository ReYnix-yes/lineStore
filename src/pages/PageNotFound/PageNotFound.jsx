import Header from "../../components/partials/Header/Header";
import styles from "./styles.module.scss";
const PageNotFound = () => {
  return (
    <>
      <Header search={false} cart={false} />
      <div className={styles.container}>
        <h1 className={styles.title}>
          Page <span className={styles.not}>Not</span> Found!
        </h1>
      </div>
    </>
  );
};

export default PageNotFound;
