import styles from "./header.module.css";
import { Authorization } from "../Authorization/Authorization";
import { Logo } from "../Logo/Logo";
import { useLocation } from "react-router-dom";
import { BackButton } from "../Back-button/Back-button";


export const Header = () => {

  const location = useLocation();

  console.log(location);
  
  const isRestaurantPage = location.pathname.startsWith('/restaurant/');

  console.log(isRestaurantPage);
  


  return (
    <header className={styles.header}>
      {isRestaurantPage && <BackButton />}
      <Logo />
      <Authorization />
    </header>
  );
};
