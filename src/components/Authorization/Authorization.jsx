import styles from "./authorization.module.css";
import { useUser } from "../user-context/use-user";
import { Button } from "../Button/Button";

export const Authorization = () => {
  const { auth, toggleAuth } = useUser();

  const { isAuthorized, name } = auth;

  return (
    <div className={styles.authorization}>
        {isAuthorized && name && <h3 className={styles.authorization__username}>{auth.name}</h3>}
        <Button onClick={toggleAuth} text={isAuthorized ? "Sign out" : "Sign in"} />
      </div>
  );
};
