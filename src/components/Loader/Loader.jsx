import styles from "./loader.module.css";

export const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.loader__circle}>
        <div className={styles.loader__subcircle}></div>
      </div>
    </div>
  );
};
