import { HiChevronDown, HiSearch } from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-screen"
          >
            <div className="flex flex-col justify-center items-center">
              <div className="form-control">
                <label className="input-group input-group-sm">
                  <span>
                    <button className="text-2xl">
                      <HiSearch />
                    </button>
                  </span>
                  <input
                    type="text"
                    placeholder="Search"
                    className="input input-bordered input-sm w-full"
                  />
                </label>
              </div>

              <div className="avatar my-5">
                <div className="w-8 rounded">
                  <img
                    src="https://placeimg.com/192/192/people"
                    alt="Tailwind-CSS-Avatar-component"
                  />
                </div>
              </div>
              <Link className="mb-5">
                Nahidul Islam Asif
                <HiChevronDown className="text-2xl inline" />
              </Link>
              <label
                htmlFor="my-drawer-2"
                className="btn btn-sm lg:hidden text-white w-80"
              >
                Open drawer
              </label>
            </div>
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl">Home</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <div className="flex items-center">
            <div className="form-control">
              <label className="input-group input-group-sm">
                <span>
                  <button className="text-2xl">
                    <HiSearch />
                  </button>
                </span>
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered input-sm w-96"
                />
              </label>
            </div>

            <div className="avatar ml-4">
              <div className="w-8 rounded">
                <img
                  src="https://placeimg.com/192/192/people"
                  alt="Tailwind-CSS-Avatar-component"
                />
              </div>
            </div>
            <Link className="ml-4">
              Nahidul Islam Asif
              <HiChevronDown className="text-2xl inline" />
            </Link>
          </div>
        </ul>
      </div>
      <div className="navbar-end">
        <a href="/" className="btn btn-sm">
          Upload content
        </a>
      </div>
    </div>
  );
};

export default Header;
