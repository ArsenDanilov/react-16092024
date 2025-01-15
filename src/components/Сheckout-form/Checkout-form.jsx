import classNames from "classnames";
import styles from "./checkoutForm.module.css";
import cartStyles from "../Cart/cart.module.css";
import { Button } from "../Button/Button";
import { useNavigate } from "react-router-dom";

export const CheckoutForm = () => {
  const navigate = useNavigate();

  const handleThankYouPage = () => navigate("/thankyou");

  return (
    <form className={styles.checkoutForm} action="">
      <div className={styles.checkoutForm__fields}>
        <label className={styles.checkoutForm__label} htmlFor="name">
          <span className={styles.checkoutForm__name}>Name</span>
          <input
            className={styles.checkoutForm__input}
            data-required="true"
            type="text"
          />
        </label>
        <label className={styles.checkoutForm__label} htmlFor="phone">
          <span className={styles.checkoutForm__name}>Phone Number</span>
          <input
            className={styles.checkoutForm__input}
            data-required="true"
            type="tel"
          />
        </label>
        <label className={styles.checkoutForm__label} htmlFor="name">
          <span className={styles.checkoutForm__name}>Address</span>
          <textarea
            className={classNames(
              styles.checkoutForm__input,
              styles.checkoutForm__textarea
            )}
          ></textarea>
        </label>
      </div>
      <Button
        onClick={handleThankYouPage}
        text={"CHECKOUT"}
        type={"submit"}
        className={cartStyles.cart__button}
      />
    </form>
  );
};
