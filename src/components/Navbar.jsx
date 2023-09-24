import React from "react";
import { TbLogout } from "react-icons/tb";
import { SiAseprite } from "react-icons/si";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOutUser } from "../state/userSlice";

const Navbar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const menuRef = useRef(null);
  const location = useLocation();
  const dispatch = useDispatch();

  const handleSelect = (e) => {
    setSearch(e.target.value);
  };

  const clearInput = () => {
    setSearch("");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleLogOut = () => {
    dispatch(logOutUser());
    toggleMenu();
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className="bg-slate-800 shadow-2xl w-full h-20 flex items-center md:justify-between ">
      <Link to="/" className="max-sm:w-3/12 max-sm:h-5">
        <h1 className="font-bold text-slate-300 sm:text-3xl md:text-6xl">
          NextFlix!
        </h1>
      </Link>

      <div className="w-7/12 h-12 flex justify-center items-center">
        <input
        onChange={handleSelect}
        value={search}
        type="text"
        className="bg-slate-800 border-gray-500 border-2 p-2 text-gray rounded max-sm:h-6 sm:h-7 w-2/3 h-11"/>
        <Link to={`/results/${search}`}>
        <button  onClick={clearInput} type="button" className="ml-5 shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white max-sm:h-6 max-sm:w-12 max-sm:text-sm sm:h-7 rounded w-14 h-10">Search</button>
        </Link>
      </div>

      {!user ? (
        <div
          className="max-sm:w-2/12 max-sm:h-5 sm:w-2/12 sm:h-6 md:w-2/12 md:h-6 flex justify-center items-center"
          ref={menuRef}
        >
          <TbLogout
            className="text-white sm:text-3xl md:text-4xl lg:text-4xl"
            onClick={toggleMenu}
          />
          {isOpen && (
            <ul className="absolute mt-7 space-y-2 bg-white border rounded-lg max-sm:w-13 max-sm:h-15">
              <li className="flex justify-center items-center  max-sm:h-1/2 hover:bg-gray-400">
                <Link
                  to="/login"
                  className="block  text-gray-700 max-sm:text-sm "
                >
                  Log in!
                </Link>
              </li>
              <li className="flex justify-center items-center max-sm:h-1/2 hover:bg-gray-400">
                <Link
                  to="/signup"
                  className="block  text-gray-700 max-sm:text-sm"
                >
                  Sign up
                </Link>
              </li>
            </ul>
          )}
        </div>
      ) : (
        <div
          className="max-sm:ml-3 max-sm:w-2/12 max-sm:h-5 sm:w-2/12 sm:h-6 md:w-2/12 md:h-6 flex justify-center items-center"
          ref={menuRef} 
        >
           <p className="text-white text-xl max-sm:text-xs">Hi, {user.username}!</p>
          <SiAseprite
            className="text-white sm:text-3xl md:text-4xl lg:text-4xl"
            onClick={toggleMenu}
          />
          {isOpen && (
            <ul className="absolute mt-7 space-y-2 bg-white border rounded-lg max-sm:w-13 max-sm:h-15">
              <li className="flex justify-center items-center max-sm:bg-red-400 max-sm:h-1/2 hover:bg-gray-400 ">
                <button
                  onClick={handleLogOut}
                  type="button"
                  className="text-gray-700 max-sm:text-sm "
                >
                  Log out
                </button>
              </li>
            </ul>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
