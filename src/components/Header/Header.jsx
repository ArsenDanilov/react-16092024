import styles from "./header.module.css";
import { Authorization } from "../Authorization/Authorization";
import { Clock } from "../Clock/Clock";
import { Logo } from "../Logo/Logo";

export const Header = () => {


  return (
    <header className={styles.header}>
      <Clock />
      <Logo />
      <Authorization />
    </header>
  );
};
