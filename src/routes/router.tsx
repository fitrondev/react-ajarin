import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import RootLayout from "../layouts/RootLayout";
import Order from "../pages/Order";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/order",
        element: <Order />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
