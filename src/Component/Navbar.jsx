import React, { useState } from "react";
import { GrMenu } from "react-icons/gr";
import { IoClose } from "react-icons/io5";
import Logo from "../assets/Image/Logo.png";
import Search from "../assets/Icons/Search.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { menuLinks } from "../assets/MenuLinks";

const Navbar = ({ setShowLogin }) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className={`flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 text-gray-600 border-b border-borderColor relative transition-all
      ${location.pathname === "/" && "bg-light"}`}
    >
      {/* Logo */}
      <Link to="/">
        <img src={Logo} alt="logo" className="h-8" />
      </Link>

      {/* Links */}
      <div
        className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16 max-sm:border-t border-borderColor right-0 flex flex-col
      sm:flex-row items-start sm:items-center gap-4 sm:gap-8 max-sm:p-4 transition-all duration-300 z-50 ${
        location.pathname === "/" ? "bg-light" : "bg-white"
      } ${open ? "max-sm:translate-x-0" : "max-sm:translate-x-full"}`}
      >
        {menuLinks.map((link, index) => (
          <Link key={index} to={link.path}>
            {link.name}
          </Link>
        ))}

        {/* Search in put */}
        <div className="hidden lg:flex items-center text-sm gap-2 border border-borderColor px-3 max-w-56 rounded-full">
          <input
            type="text"
            placeholder="Search Products"
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
          />
          <img src={Search} alt="search" />
        </div>

        {/* Login */}
        <div className="flex max-sm:flex-col items-start sm:items-center gap-6">
          <button onClick={() => navigate("/owner")} className="cursor-pointer">
            Dashboard
          </button>
          <button
            onClick={() => setShowLogin(true)}
            className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition-all text-white rounded-lg"
          >
            Login
          </button>
        </div>
      </div>

      <button
        className="sm:hidden cursor-pointer"
        aria-label="Menu"
        onClick={() => setOpen(!open)}
      >
        {open ? <IoClose /> : <GrMenu />}
      </button>
    </div>
  );
};

export default Navbar;
