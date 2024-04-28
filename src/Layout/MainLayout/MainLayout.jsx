import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <section>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
          reiciendis ut repudiandae odio ipsa? Consequatur minus facilis fugiat
          incidunt dolorum, voluptatem nemo voluptates quasi unde consectetur,
          exercitationem libero! Modi, aperiam?
        </p>
      </div>
      <Outlet />
    </section>
  );
};

export default MainLayout;
