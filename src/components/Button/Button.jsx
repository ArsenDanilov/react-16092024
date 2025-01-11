import classNames from "classnames";
import styles from "./button.module.css";

export const Button = ({ onClick, text, type, isActive, className }) => {

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={isActive}
      className={classNames(styles.button, className)}
    >
      {text}
    </button>
  );
};