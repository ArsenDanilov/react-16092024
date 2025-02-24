import styles from "./banner.module.css";

export const Banner = () => {
  return (
    <div className={styles.banner}>
      <img
        className={styles.banner__img}
        src="/src/static/media/header-banner.jpg"
        alt="Banner"
      />
      <div className={styles.banner__wrapper}>
        <h2 className={styles.banner__title}>Order Food</h2>
        <h3 className={styles.banner__subtitle}>From 175 Restaurants</h3>
      </div>
    </div>
  );
};
