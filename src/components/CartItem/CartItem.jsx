import styles from "./cartItem.module.css";

export const CartItem = ({ amount, price, name }) => {
  return (
    <div className={styles.cartItem}>
      <p>{name}</p>
      <p>{price * amount} $</p>
    </div>
  );
};
