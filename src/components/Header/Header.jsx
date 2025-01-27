import styles from "./header.module.css";
import { Authorization } from "../Authorization/Authorization";
import { Logo } from "../Logo/Logo";
import { useLocation } from "react-router-dom";
import { BackButton } from "../Back-button/Back-button";


export const Header = () => {

  const location = useLocation();
  
  const isHomePage = location.pathname.endsWith('/restaurants');

  return (
    <header className={styles.header}>
      {!isHomePage && <BackButton />}
      <Logo />
      <Authorization />
    </header>
  );
};
