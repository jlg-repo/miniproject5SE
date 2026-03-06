import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Root = () => {
  const location = useLocation();
  const hideRootNavbar = location.pathname.startsWith("/dashboard");

  return (
    <div className="min-h-screen bg-base-200">
      {!hideRootNavbar && <Navbar />}
      <div className="mx-auto max-w-6xl px-4 py-8 min-h-[calc(100vh-220px)]">
        <Outlet />
      </div>
      <div className="mx-auto max-w-6xl px-4 pb-6">
        <Footer />
      </div>
    </div>
  );
};

export default Root;
