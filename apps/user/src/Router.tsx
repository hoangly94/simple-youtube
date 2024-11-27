import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import { Home } from "./pages/home";
import { Video } from "./pages/video";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import NotFound from "./not-found";
import { UnAuthenticatedLayout } from "./layouts";

const protectedRoutes: RouteObject[] = [
  {
    id: "home",
    path: "",
    Component: Home,
  },
  {
    id: "video-detail",
    path: "video",
    Component: Video,
  },
];

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    // loader: rootLoader,
    ErrorBoundary: ErrorBoundary,

    children: [
      {
        path: "login",
      },

      {
        path: "logout",
      },
      {
        id: "auth",
        path: "",
        Component: UnAuthenticatedLayout,
        children: protectedRoutes,
      },
    ],
  },
  {
    id: "not-found",
    path: "*",
    Component: NotFound,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
