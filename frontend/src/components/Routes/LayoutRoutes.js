import Home from "../Customer/Home";
import Layout from "../Customer/Layout";
import Login from "../Customer/Login";
import Signup from "../Customer/Signup";

const LayoutRoutes = [
  {
    id: 1,
    title: "Login",
    path: "/login",
    component: Login,
    wrapperComponent: Layout,
    exact: true,
  },
  {
    id: 2,
    title: "Sign up",
    path: "/signup",
    component: Signup,
    wrapperComponent: Layout,
    exact: true,
  },
  {
    id: 3,
    title: "Home",
    path: "/",
    component: Home,
    wrapperComponent: Layout,
    exact: true,
  },
];

export default LayoutRoutes;
