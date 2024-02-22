import NotFound from "../common/NotFound";
import AdminRoutes from "./AdminRoutes";
import LayoutRoutes from "./LayoutRoutes";

const CommonRoutes = [
  {
    id: 1,
    title: "Not Found",
    path: "**",
    component: NotFound,
  },
];

export const routes = [...CommonRoutes, ...AdminRoutes, ...LayoutRoutes];
