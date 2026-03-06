import Home from "../components/Home";
import Root from "../layout/Root";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../components/Dashboard"

const MainRouter = [
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "/signup", Component: SignUp },
      { path: "/login", Component: Login },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),

      },
    ],
  },
];

export default MainRouter;