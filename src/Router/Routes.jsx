import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import HomePage from "../Pages/Home/HomePage/HomePage";
import TouristSpotDetails from "../Pages/TouristSpotDetails/TouristSpotDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: (
      <div>
        <p>404 Page</p>
      </div>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/tourist_spots/:id",
        element: <TouristSpotDetails />,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/tourist_spots/${params.id}`);
        },
      },
    ],
  },
]);

export default router;
