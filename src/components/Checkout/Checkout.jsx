import { CheckoutForm } from "../Сheckout-form/Checkout-form";
import { Cart } from "../Cart/Cart";
import styles from "./checkout.module.css";

export const Checkout = () => {
  return (
    <div className={styles.checkout}>
      <div className={styles.checkout__container}>
        <CheckoutForm />
        <Cart />
      </div>
    </div>
  );
};
