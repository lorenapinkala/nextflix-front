import React from 'react';
import TopMovies from './TopMovies';
import PopMovies from './PopMovies';
import UpcomingMovies from './UpcomingMovies';

const Home = () => {
  return (
    <div className='flex justify-center w-full h-auto min-h-screen items-center'>
      <div className="space-y-4 w-11/12 h-auto min-h-screen">
        <UpcomingMovies />
        <TopMovies/>
        <PopMovies/>
      </div>
    </div>
  );
}

export default Home;
