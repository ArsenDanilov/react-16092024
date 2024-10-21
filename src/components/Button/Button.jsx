import classNames from "classnames";
import styles from "./button.module.css";
import { ThemeContext } from "../App/App";
import { useTheme } from "../theme-context/use-theme";

export const Button = ({ onClick, text, isActive, className }) => {

  const { theme } = useTheme();

  return (
    <button
      onClick={onClick}
      disabled={isActive}
      className={classNames(styles.button, className, {
        [styles.light]: theme === 'light',
        [styles.dark]: theme === 'dark',
      })}
    >
      {text}
    </button>
  );
};