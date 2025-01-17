import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import Footer from "../../Pages/Shared/Footer/Footer";

const MainLayout = () => {
  // const {}
  return (
    <section>
      <ScrollRestoration />
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  );
};

export default MainLayout;
