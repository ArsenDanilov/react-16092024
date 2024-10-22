import styles from "./header.module.css";
import { useUser } from "../user-context/use-user";
import { useTheme } from "../theme-context/use-theme";
import classNames from "classnames";
import buttonStyles from "../Button/button.module.css";

export const Header = () => {
  const { isAuth, toggleAuth, name } = useUser();
  const { theme } = useTheme();

  return (
    <header className={styles.header}>
      <p>Header</p>
      <div className={styles.authorization}>
        {isAuth && <h3 className={styles.authorization__username}>{name}</h3>}
        <button
          className={classNames(buttonStyles.button, {
            [buttonStyles.light]: theme === "light",
            [buttonStyles.dark]: theme === "dark",
          })}
          onClick={toggleAuth}
        >
          {isAuth ? "Sign out" : "Sign in"}
        </button>
      </div>
    </header>
  );
};
