import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo/logo.png";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import './Header.css';
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut().then().catch();
  };
  const menuItems = (
    <>
      <li className="font-semibold">
        <Link to="/">Home</Link>
      </li>
      <li className="font-semibold">
        <Link to="/blog">Blog</Link>
      </li>

      {user?.email ? (
        <>
          <li className="font-semibold">
            <Link to="/my-review">My Reviews</Link>
          </li>
          <li className="font-semibold">
            <Link to="/add-service">Add service</Link>
          </li>
          <li className="font-semibold">
            <button onClick={handleLogOut} className="logout-button">
              Log out
            </button>
          </li>
        </>
      ) : (
        <li className="font-semibold">
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-white text-black h-14 mb-12 p-8">
      <div className="navbar-start">
        <div className="dropdown text-orange-700">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        {/* Logo  */}
        <Link to="/" className="">
          <div className="flex">
            <img className="logo" src={logo} alt="" />
          </div>
        </Link>
      </div>

      {/* Menu list  */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Header;
