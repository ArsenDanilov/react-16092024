import classNames from "classnames";
import styles from "./checkoutForm.module.css";
import cartStyles from "../Cart/cart.module.css";
import { Button } from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const CheckoutForm = () => {
  const navigate = useNavigate();

  const handleThankYouPage = () => navigate("/thankyou");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!phone) newErrors.phone = "Phone Number is required";
    if (!address) newErrors.address = "Address is required";
    setErrors(newErrors);
    console.log("Валидация");
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    console.log('handle submit');
    
    if (validate()) {
      console.log({ name, phone, address });
    } else {
        console.log('Не валидация');
        event.preventDefault();
    }
  };

  const handleFocus = (field) => {
    if (!field) {
      console.log('ПОЛЕ НЕ ЗАПОЛНЕНО'); // РАБОТАЕТ

      return { border: "1px solid red" };
    }
    return {};
  };

  return (
    <form className={styles.checkoutForm} onSubmit={handleSubmit}>
      <div className={styles.checkoutForm__fields}>
        <label className={styles.checkoutForm__label} htmlFor="name">
          <span className={styles.checkoutForm__name}>Name</span>
          <input
            value={name}
            className={styles.checkoutForm__input}
            data-required="true"
            type="text"
            onChange={(e) => setName(e.target.value)}
            onBlur={() => handleFocus(name)}
          />
          {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
        </label>
        <label className={styles.checkoutForm__label} htmlFor="phone">
          <span className={styles.checkoutForm__name}>Phone Number</span>
          <input
            value={phone}
            className={styles.checkoutForm__input}
            data-required="true"
            type="tel"
            onChange={(e) => setPhone(e.target.value)}
            onBlur={() => handleFocus(phone)}
          />
          {errors.phone && <span style={{ color: "red" }}>{errors.phone}</span>}
        </label>
        <label className={styles.checkoutForm__label} htmlFor="name">
          <span className={styles.checkoutForm__name}>Address</span>
          <textarea
            value={address}
            className={classNames(
              styles.checkoutForm__input,
              styles.checkoutForm__textarea
            )}
            onChange={(e) => setAddress(e.target.value)}
            onBlur={() => handleFocus(address)}
          ></textarea>
          {errors.address && (
            <span style={{ color: "red" }}>{errors.address}</span>
          )}
        </label>
      </div>
      <Button
        isActive={!name || !phone || !address}
        onClick={handleThankYouPage}
        text={"CHECKOUT"}
        type={"submit"}
        className={cartStyles.cart__button}
      />
    </form>
  );
};
