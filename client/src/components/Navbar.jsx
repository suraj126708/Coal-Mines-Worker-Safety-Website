/* eslint-disable react/prop-types */
import Bgimg from "../assets/images/logo.svg";
import { useState } from "react";
import NavbarAnchor from "./NavbarAnchor";
import { useNavigate } from "react-router-dom";

const BASE_URL =
  "https://coal-mines-worker-safety-website-api.vercel.app/uploads/";

const NavBar = ({ id, isAuthorised }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Extract the filename from localStorage and create the full URL
  const filename = localStorage.getItem("profilePicture")?.split("\\").pop();
  const profilepic = filename ? `${BASE_URL}${filename}` : null;
  console.log(profilepic);

  const navigate = useNavigate();

  const handleUserProfileclick = () => {
    navigate("/profile");
  };

  return (
    <nav
      className={`absolute top-0 w-[100%] ${
        id === "black" ? "text-black" : "text-white"
      } `}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
        <a href="/" className="flex items-center space-x-3">
          <img src={Bgimg} className="h-28 z-40" alt="Fit4You Logo" id="logo" />
        </a>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="flex text-sm rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 "
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span className="sr-only">Open user menu</span>
            {isAuthorised === "delete" ? null : isAuthorised ? (
              <img
                className="w-12 rounded-full"
                src={profilepic}
                alt="user"
                onClick={handleUserProfileclick}
              />
            ) : (
              <a
                href="/login"
                className="bg-none font-semibold text-xl underline"
              >
                Login
              </a>
            )}
          </button>
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded={isOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1 lg:bg-transparent z-50`}
          id="navbar-user"
        >
          <ul
            id="navText"
            className="flex flex-col font-medium p-4 md:p-0 mt-0 md:space-x-8 z-40 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 z-40"
          >
            <NavbarAnchor to={"/"} text={"Home"} id={"home"} className={id} />
            <NavbarAnchor to={"/about"} text={"About"} className={id} />
            <NavbarAnchor
              to={"/location"}
              text={"Track Workers"}
              className={id}
            />
            <NavbarAnchor to={"/contact"} text={"Contact"} className={id} />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
