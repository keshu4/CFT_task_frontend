import Loadable from "react-loadable";
import { Navigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

const DashBoard = Loadable({
  loader: () => import("../component/pages/DashBoard/index"),
  loading: () => <h1>Loading...</h1>,
});

const PrivateRoutes = {
  element: <MainLayout />,
  children: [
    {
      path: '/dashboard',
      title: '/dashboard',
      element: <DashBoard />,
    },
    {
      path: "*",
      element: <Navigate to={'/dashboard'} />,
    },
  ],
};

export default PrivateRoutes;