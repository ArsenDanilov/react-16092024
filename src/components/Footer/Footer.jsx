import styles from "./footer.module.css";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.footer__container}>
          <p
            className={styles.footer__link}
            onClick={() => handleClick("/user-agreement")}
          >
            User Agreement
          </p>
          <p
            className={styles.footer__link}
            onClick={() => handleClick("/license-agreement")}
          >
            License Agreement
          </p>
          <p
            className={styles.footer__link}
            onClick={() => handleClick("/confidentiality")}
          >
            Personal data processing policy
          </p>
        </div>
        <div className={styles.footer__container}>
          <p>© 2025, ANYFOOD</p>
          <img src="/src/static/media/logo_sbp_monochrome.svg" alt="" />
          <p>developed by Arsen Danilov</p>
        </div>
      </footer>
    </div>
  );
};
