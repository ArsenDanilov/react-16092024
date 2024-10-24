import styles from "./header.module.css";
import { Authorization } from "../Authorization/Authorization";

export const Header = () => {


  return (
    <header className={styles.header}>
      <p>Header</p>
      <Authorization />
    </header>
  );
};
