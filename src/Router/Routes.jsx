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
import CountrySpots from "../Pages/CountrySpots/CountrySpots";
import PrivetRoute from "./PrivetRoute/PrivetRoute";

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
        element: (
          <PrivetRoute>
            <TouristSpotDetails />
          </PrivetRoute>
        ),
        loader: ({ params }) => {
          return fetch(
            `https://roam-server-ten.vercel.app/tourist_spots/${params.id}`
          );
        },
      },
      // {
      //   path: "/spots/:id",
      //   element: <TouristSpotDetails />,
      //   loader: ({ params }) => {
      //     return fetch(`https://roam-server-ten.vercel.app/all_spots/${params.id}`);
      //   },
      // },
      {
        path: "/countries/:country",
        element: (
          <PrivetRoute>
            <CountrySpots />
          </PrivetRoute>
        ),
        loader: ({ params }) => {
          return fetch(
            `https://roam-server-ten.vercel.app/countries/${params.country}`
          );
        },
      },
      {
        path: "/add_spot",
        element: (
          <PrivetRoute>
            <AddTouristsSpot />
          </PrivetRoute>
        ),
      },
      {
        path: "/my_list/",
        element: (
          <PrivetRoute>
            <MyList />
          </PrivetRoute>
        ),
        // loader: ({ params }) => {
        //   return fetch(`https://roam-server-ten.vercel.app/tourist_spots/${params.email}`);
        // },
      },
      {
        path: "update_spot/:id",
        element: (
          <PrivetRoute>
            <UpdateTouristSpot />
          </PrivetRoute>
        ),
        loader: ({ params }) => {
          return fetch(
            `https://roam-server-ten.vercel.app/tourist_spots/${params.id}`
          );
        },
      },
      {
        path: "/all_spots",
        element: <AllTouristSpot />,
        loader: () =>
          fetch("https://roam-server-ten.vercel.app/tourist_spots/"),
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
