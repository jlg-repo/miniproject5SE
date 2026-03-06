import App from "../App";
import Home from "../components/Home";
import Root from "../layout/Root";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import Dashboard from "../components/Dashboard"
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../components/pages/ErrorPage";


const MainRouter = [
  {
    path: "/",
    errorElement: <ErrorPage />,
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "/signup", Component: SignUp },
      { path: "/login", Component: Login },
      {
        path: "/dashboard",
        Component: Dashboard,

        element: (
          <PrivateRoute>
            <App />
          </PrivateRoute>
        ),

      },
    ],
  },
];

export default MainRouter;

/* 
import PrivateRoute from "./PrivateRoute";

        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),


*/