import App from "../App";
import Root from "../layout/Root";
import Home from "../components/pages/Home";
import SignUp from "../components/pages/SignUp";
import Login from "../components/pages/Login";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../components/pages/ErrorPage";

const MainRouter = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "signup", element: <SignUp /> },
      { path: "login", element: <Login /> },
      {
        path: "dashboard",
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
