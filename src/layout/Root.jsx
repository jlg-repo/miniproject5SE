import { Outlet } from "react-router-dom";

const Root = () => {

  return (
    <div className="w-full min-h-screen bg-base-100">
      <div className="min-h-[70vh] p-10 m-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
