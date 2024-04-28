import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div></div>,
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
