import { useNavigate } from "react-router-dom";
import styles from "./logo.module.css";

export const Logo = () => {
  const navigate = useNavigate();

  const handleToHomePageClick = () => {
    navigate("/restaurants");
  };

  return (
    <a className={styles.logo__link} onClick={handleToHomePageClick}>
      <picture>
        <img src="/src/static/media/logo.fca2e89e.svg" alt="ANYFOOD logo" />
      </picture>
    </a>
  );
};
