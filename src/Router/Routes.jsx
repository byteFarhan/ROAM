import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import HomePage from "../Pages/Home/HomePage/HomePage";
import TouristSpotDetails from "../Pages/TouristSpotDetails/TouristSpotDetails";
import AddTouristsSpot from "../Pages/AddTouristsSpot/AddTouristsSpot";
import AllTouristSpot from "../Pages/AllTouristSpot/AllTouristSpot";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import UpdateTouristSpot from "../Pages/UpdateTouristSpot/UpdateTouristSpot";
import MyList from "../Pages/MyList/MyList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
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
      // {
      //   path: "/spots/:id",
      //   element: <TouristSpotDetails />,
      //   loader: ({ params }) => {
      //     return fetch(`http://localhost:5000/all_spots/${params.id}`);
      //   },
      // },
      {
        path: "/add_spot",
        element: <AddTouristsSpot />,
      },
      {
        path: "/my_list/",
        element: <MyList />,
        // loader: ({ params }) => {
        //   return fetch(`http://localhost:5000/tourist_spots/${params.email}`);
        // },
      },
      {
        path: "update_spot/:id",
        element: <UpdateTouristSpot />,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/tourist_spots/${params.id}`);
        },
      },
      {
        path: "/all_spots",
        element: <AllTouristSpot />,
        loader: () => fetch("http://localhost:5000/tourist_spots/"),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
