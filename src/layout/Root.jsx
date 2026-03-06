import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div className="w-full h-[100vh]">
      <Navbar />
      <div className="min-h-[70vh] p-10 m-10">
        <Outlet />
      </div>

      <Footer/>
    </div>
  );
};

export default Root;