import React from "react";
import TopMovies from "./TopMovies";
import PopMovies from "./PopMovies";
import UpcomingMovies from "./UpcomingMovies";
import MobileUpcoming from "./MobileUpcoming";

const Home = () => {
  return (
    <div className="flex justify-center w-full h-auto min-h-screen items-center">
      <div className="space-y-4 w-11/12 h-auto min-h-screen">
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
