import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";

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
        element: <div></div>,
      },
    ],
  },
]);

export default router;
