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
    <nav className="bg-slate-800 shadow-2xl w-full h-20 flex  items-center justify-between">
      <Link to="/" className=" ml-5">
        <h1 className="font-bold text-slate-300 text-6xl">NextFlix!</h1>
      </Link>

      <div className="w-1/3 mx-12 flex ">
        <input
          onChange={handleSelect}
          value={search}
          type="text"
          className="mt-2 bg-slate-800 border-gray-500 border-2 p-2 text-white h-11 w-full rounded"
        />

        <Link to={`/results/${search}`}>
          <button
            onClick={clearInput}
            className="ml-3 mt-1 shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-lg py-1 px-8 rounded h-12"
          >
            Search
          </button>
        </Link>
      </div>

      {!user ? (
        <div className="relative" ref={menuRef}>
          <TbLogout
            onClick={toggleMenu}
            className="mr-12 text-white w-12 h-12"
          />
          {isOpen && (
            <ul className="absolute mt-2 space-y-2 bg-white border rounded-lg shadow-lg">
              <li>
                <Link to="/login" className="block px-4 py-2 text-gray-700">
                  Log in!
                </Link>
              </li>
              <li>
                <Link to="/signup" className="block px-4 py-2 text-gray-700">
                  Sign up
                </Link>
              </li>
            </ul>
          )}
        </div>
      ) : (
        <div className="flex items-center relative" ref={menuRef}>
          <p className="text-white text-xl">Hi, {user.username}!</p>
          <div>
            <button onClick={toggleMenu} type="button">
              <SiAseprite className="ml-7 mr-7 text-white w-12 h-12" />
            </button>
            {isOpen && (
              <ul className="absolute mt-2 space-y-2 bg-white border rounded-lg shadow-lg">
                <li>
                  <div className=" hover:bg-gray-400 block px-4 py-2 text-gray-700">
                    <button
                      className="w-full h-full"
                      onClick={handleLogOut}
                      type="button"
                    >
                      Log out!
                    </button>
                  </div>
                </li>
              </ul>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
