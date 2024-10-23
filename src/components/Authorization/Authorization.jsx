import styles from "./authorization.module.css";
import { useUser } from "../user-context/use-user";
import { Button } from "../Button/Button";

export const Authorization = () => {
  const { isAuth, toggleAuth, name } = useUser();

  return (
    <div className={styles.authorization}>
        {isAuth && <h3 className={styles.authorization__username}>{name}</h3>}
        <Button onClick={toggleAuth} text={isAuth ? "Sign out" : "Sign in"} />
      </div>
  );
};
