import React, { useContext } from "react";
import {
  HiOutlineBell,
  HiOutlineLogin,
  HiOutlineSwitchHorizontal,
  HiOutlineUser,
  HiViewGrid,
} from "react-icons/hi";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/Context";
import logo from '../images/logo3-removebg-preview.png'

const Main = () => {
  const { logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => { })
      .catch((err) => {});
  };
  return (
    <>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col overflow-x-hidden">
          {/* <!-- Page content here --> */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-slate-200 text-base-content">
            <div className="text-4xl mb-8 mx-auto">
              <img className="w-28" src={logo} alt="" />
            </div>
            <li>
              <Link to='/'>
                <HiViewGrid /> Home
              </Link>
            </li>
            <li>
              <Link>
                <HiOutlineBell /> Notification
                <div className="badge badge-secondary">+99</div>
              </Link>
            </li>
            <li>
              <Link>
                <HiOutlineSwitchHorizontal /> Shorts
              </Link>
            </li>
            <li>
              <Link to='/profile'>
                <HiOutlineUser /> Profile
              </Link>
            </li>
            <button
              onClick={handleLogout}
              className="btn btn-ghost absolute bottom-5 text-lg"
            >
              <HiOutlineLogin className="inline mr-3" />
              Log Out
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Main;
