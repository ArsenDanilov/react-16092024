import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { ScrollBar } from "../ScrollBar/ScrollBar";
import { ToggleThemeButton } from "../Toggle-theme-button/Toggle-theme-button";
import { Cart } from "../Cart/Cart";
import { Outlet } from "react-router-dom";
import { BackButton } from "../Back-button/Back-button";
import { Banner } from "../Banner/Banner";


export const Layout = () => {
  return (
    <div>
      <ScrollBar />
      <BackButton />
      <ToggleThemeButton />
      <Header />
      <Banner />
      <Outlet />
      <Cart />
      <Footer />
    </div>
  );
};
