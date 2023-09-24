import React from "react";
import TopMovies from "./TopMovies";
import PopMovies from "./PopMovies";
import UpcomingMovies from "./UpcomingMovies";
import MobileUpcoming from "./MobileUpcoming";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-center w-full h-auto min-h-screen items-center">
      <div className="space-y-4 w-11/12 h-auto min-h-screen">

      <div className="sm:hidden">
      <Link to="/favorites">
        <button type="button" className="mt-2 ml-5 shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white max-sm:text-sm sm:h-7 rounded w-17 h-10">Go to favorites</button>
        </Link>
      </div>
        <div className="sm:hidden">
          <MobileUpcoming/>
        </div>
        <div className="max-sm:hidden">
          <UpcomingMovies />
        </div>

        <div className="max-sm:hidden">
          <TopMovies />
        </div>

        <div className="max-sm:hidden">
          <PopMovies />
        </div>

      </div>
    </div>
  );
};

export default Home;
