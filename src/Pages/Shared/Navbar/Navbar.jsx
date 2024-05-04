import { Link, NavLink } from "react-router-dom";
import useTheme from "../../../hooks/useTheme";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { IoExitOutline } from "react-icons/io5";
import useAuth from "../../../hooks/useAuth";
import swal from "sweetalert";

const Navbar = () => {
  const { changeTheme, mode } = useTheme();
  const { user, userSignOut } = useAuth();
  const handleLogout = () => {
    userSignOut()
      .then(() => {
        swal("Logout successfull.", {
          button: false,
        });
      })
      .catch((error) => {
        swal(error.message, {
          button: false,
        });
      });
  };

  const navItems = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "*:underline *:text-primary *:font-medium" : "text-white"
          }
        >
          <p className="text-primary">Home</p>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/all_spots"}
          className={({ isActive }) =>
            isActive ? "*:underline *:text-primary *:font-medium" : "text-white"
          }
        >
          <p className="text-primary">All Spots</p>
        </NavLink>
      </li>
      <li className={`${user ? "" : "hidden"}`}>
        <NavLink
          to={"/add_spot"}
          className={({ isActive }) =>
            isActive ? "*:underline *:text-primary *:font-medium" : "text-white"
          }
        >
          <p className="text-primary">Add Spot</p>
        </NavLink>
      </li>
      <li className={`${user ? "hidden" : ""}`}>
        <NavLink
          to={"/register"}
          className={({ isActive }) =>
            isActive ? "*:underline *:text-primary *:font-medium" : "text-white"
          }
        >
          <p className="text-primary">Register</p>
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <nav className="bg-[#f9f9f9] dark:bg-[#1C1C1C]">
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="flex flex-col drawer-content">
            {/* Navbar */}
            <div className="justify-between w-full mx-auto max-w-7xl navbar lg:flex-row">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="text-white border-none btn btn-square bg-title swap swap-rotate"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <Link to={"/"} className="px-2 mx-2">
                <h1 className="text-4xl font-bold text-primary">ROAM</h1>
              </Link>
              <div onClick={changeTheme} className="cursor-pointer">
                <p className="text-2xl font-medium md:text-3xl text-primary">
                  {mode === "light" ? <MdDarkMode /> : <MdOutlineLightMode />}
                </p>
              </div>
              <div className="flex-1 hidden lg:justify-center lg:flex">
                <ul className="menu menu-horizontal">
                  {/* Navbar menu content here */}
                  {navItems}
                </ul>
              </div>
              <div>
                {user ? (
                  <div
                    className="z-20 dropdown dropdown-bottom dropdown-end lg:tooltip lg:tooltip-bottom"
                    data-tip={user?.displayName}
                  >
                    <div tabIndex={0} role="button" className="">
                      <div className="avatar online">
                        <div className="w-10 rounded-full">
                          <img src={user?.photoURL} />
                        </div>
                      </div>
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[3] menu px-3 py-4 shadow bg-base-100 rounded-box w-52 text-white"
                    >
                      <li className="block mb-2 lg:hidden">
                        <p className="font-medium text-navy">
                          {user?.displayName}
                        </p>
                      </li>
                      <li>
                        <button
                          onClick={handleLogout}
                          className="flex items-center gap-2 btn-base bg-primary hover:bg-title"
                        >
                          Logout
                          <IoExitOutline />
                        </button>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <Link
                    to={"/login"}
                    className="px-3 py-2 font-bold text-white md:px-5 bg-primary"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
            {/* Page content here */}
            {/* Content */}
          </div>
          <div className="z-20 drawer-side">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="min-h-full p-4 menu w-80 bg-base-200">
              {/* Sidebar content here */}
              {navItems}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
