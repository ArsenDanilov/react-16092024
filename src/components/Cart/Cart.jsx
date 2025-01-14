import { useSelector } from "react-redux";
import { selectCartItems, selectTotalPrice } from "../../redux/ui/cart";
import { CartItem } from "../CartItem/CartItem";
import styles from "./cart.module.css";
import classNames from "classnames";
import { Button } from "../Button/Button";

export const Cart = () => {
  const items = useSelector(selectCartItems);

  const totalPrice = useSelector(selectTotalPrice);

  console.log(totalPrice);

  if (!items.length) {
    return (
      <div className={styles.cart}>
        <p className={styles.cart__title}>Select a meal from the list</p>
      </div>
    );
  }

  return (
    <div className={styles.cart}>
      <div className={styles.cart__header}>
        <p className={styles.cart__title}>Basket</p>
      </div>
      <ul className={styles.cart__list}>
        {items.map(({ id, amount }) => (
          <li className={styles.cart__element} key={id}>
            <CartItem id={id} amount={amount} />
          </li>
        ))}
      </ul>
      <div className={styles.cart__footer}>
        <p className={styles.cart__subtitle}>
          <span>Delivery costs:</span>
          <span>FREE</span>
        </p>
        <p className={classNames(styles.cart__subtitle, styles.cart__subtitle_total)}>
          <span>total</span>
          <span>{totalPrice} $</span>
        </p>
        <Button text={'CHECKOUT'} type={'submit'} className={styles.cart__button}/>
      </div>
    </div>
  );
};
