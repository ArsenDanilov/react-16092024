import classNames from "classnames";
import styles from "./button.module.css";

export const Button = ({ onClick, text, isActive, className }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(styles.button, className)}
      disabled={isActive}
    >
      {text}
    </button>
  );
};