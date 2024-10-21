import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { ScrollBar } from "../ScrollBar/ScrollBar";
import { ToggleThemeButton } from "../Toggle-theme-button/Toggle-theme-button";

export const Layout = ({ children }) => {
  return (
    <div>
      <ScrollBar />
      <ToggleThemeButton />
      <Header />
      {children}
      <Footer />
    </div>
  );
};
