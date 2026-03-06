import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainRoute from "./routes/mainRoutes.jsx";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter(MainRoute);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <ToastContainer position="bottom-right" autoClose={2000} />
  </StrictMode>
);
