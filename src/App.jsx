import { createBrowserRouter, RouterProvider } from "react-router-dom";
import mainRoutes from "./routes/MainRouter";

const router = createBrowserRouter(mainRoutes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;