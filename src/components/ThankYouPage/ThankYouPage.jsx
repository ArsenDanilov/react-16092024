import styles from "./thankYouPage.module.css";

export const ThankYouPage = () => {
  return (
    <div className={styles.thankYou}>
      <div className={styles.thankYou__container}>
        <h1 className={styles.thankYou__text}>
          Thank You! <br /> Your order is being prepared
        </h1>
      </div>
    </div>
  );
};
