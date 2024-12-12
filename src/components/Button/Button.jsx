import classNames from "classnames";
import styles from "./button.module.css";

export const Button = ({ onClick, text, type, isActive }) => {

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={isActive}
      className={styles.button}
    >
      {text}
    </button>
  );
};