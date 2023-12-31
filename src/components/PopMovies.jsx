import React, { useEffect } from "react";
import Card from "../commons/Card";
import { Link } from "react-router-dom";
import useAxiosData from "../hooks/fetchData";
import { FaThumbsUp } from "react-icons/fa";

const PopMovies = () => {
  const link = `${import.meta.env.VITE_BASE_URL}/api/media/movie/popular`;
  const { data: movies, loading } = useAxiosData(link);

  useEffect(() => {}, [movies]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-full h-1/3 bg-slate-700 flex-col justify-center items-center mt-7 ">
      <div className="bg-gray-900 flex items-center">
        <FaThumbsUp  className="ml-2 text-white"/>
        <h2 className="text-white ml-2">Popular</h2>
      </div>
      <div className="grid grid-cols-5 gap-4 mt-2">
        {movies.slice(0, 5).map((item) => (
          <Link to={`description/${item.id}`} key={item.id} className="ml-5 w-4/5 h-4/5">
            <Card item={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopMovies;
