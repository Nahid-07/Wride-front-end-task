import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    
    <>
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* <!-- Page content here --> */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-orange-200 text-base-content">
            <h1 className="text-4xl mb-8 text-center">Logo</h1>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Notification</a>
          </li>
          <li>
            <a>Shorts</a>
          </li>
          <li>
            <a>Profile</a>
          </li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default Main;
