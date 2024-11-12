import styles from "./header.module.css";
import { Authorization } from "../Authorization/Authorization";
import { Clock } from "../Clock/Clock"; 

export const Header = () => {


  return (
    <header className={styles.header}>
      <Clock />
      <Authorization />
    </header>
  );
};
