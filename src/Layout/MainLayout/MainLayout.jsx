import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <section>
      <Navbar />
      <Outlet />
    </section>
  );
};

export default MainLayout;
