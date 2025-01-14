import { useGetDishByIdQuery } from "../../redux/services/api/api";
import styles from "./cartItem.module.css";

export const CartItem = ({ id, amount }) => {
  const { data } = useGetDishByIdQuery(id);
  
  const { name, price } = data || {};

  if (!name) {
    return null;
  }

  return (
    <div className={styles.cartItem}>
      <p>{name}</p>
      <p>{price * amount} $</p>
    </div>
  );
};
