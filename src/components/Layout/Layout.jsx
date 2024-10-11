import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { ScrollBar } from "../ScrollBar/ScrollBar";

export const Layout = ({ children }) => {
  return (
    <div>
      <ScrollBar />
      <Header />
      {children}
      <Footer />
    </div>
  );
};
