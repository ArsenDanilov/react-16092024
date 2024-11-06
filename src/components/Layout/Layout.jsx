import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { ScrollBar } from "../ScrollBar/ScrollBar";
import { ToggleThemeButton } from "../Toggle-theme-button/Toggle-theme-button";
import { Cart } from "../Cart/Cart";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <ScrollBar />
      <ToggleThemeButton />
      <Header />
      <Outlet />
      <Cart />
      <Footer />
    </div>
  );
};
