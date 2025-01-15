import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { Banner } from "../Banner/Banner";
import { useLocation } from "react-router-dom";



export const Layout = () => {

  const location = useLocation();

  return (
    <div>
      <Header />
      {!location.pathname.endsWith('/checkout') && !location.pathname.endsWith('/thankyou') && <Banner />}
      <Outlet />
      <Footer />
    </div>
  );
};
