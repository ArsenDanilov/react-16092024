import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { Banner } from "../Banner/Banner";
import { useLocation } from "react-router-dom";
import styles from "./layout.module.css";

export const Layout = () => {
  const location = useLocation();

  return (
    <div className={styles.layout}>
      <Header />
      {!location.pathname.endsWith("/checkout") &&
        !location.pathname.endsWith("/thankyou") && <Banner />}
      <div className={styles.content}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
