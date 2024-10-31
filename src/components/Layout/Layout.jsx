import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { ScrollBar } from "../ScrollBar/ScrollBar";
import { ToggleThemeButton } from "../Toggle-theme-button/Toggle-theme-button";
import { Cart } from "../Cart/Cart";

export const Layout = ({ children }) => {
  return (
    <div>
      <ScrollBar />
      <ToggleThemeButton />
      <Header />
      {children}
      <Cart />
      <Footer />
    </div>
  );
};
