import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { ScrollBar } from "../ScrollBar/ScrollBar";
import { ToggleThemeButton } from "../Toggle-theme-button/Toggle-theme-button";
import { Cart } from "../Cart/Cart";
import { Outlet } from "react-router-dom";
import { Banner } from "../Banner/Banner";


export const Layout = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Outlet />
      <Cart />
      <Footer />
    </div>
  );
};
