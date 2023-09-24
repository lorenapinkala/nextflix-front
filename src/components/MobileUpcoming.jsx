import React, { useEffect } from "react";
import Card from "../commons/Card";
import { Link } from "react-router-dom";
import useAxiosData from "../hooks/fetchData";
import { FaCalendarAlt } from "react-icons/fa";

const MobileUpcoming = () => {
  const link = `${import.meta.env.VITE_BASE_URL}/api/media/movie/upcoming`;
  const { data: movies, loading } = useAxiosData(link);

  useEffect(() => {}, [movies]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-full h-1/3 bg-slate-700 flex-col justify-center items-center mt-7">
      <div className="bg-gray-900 flex items-center">
        <FaCalendarAlt className="ml-2 text-white" />
        <h2 className="text-white ml-2">Upcoming</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-2">
        {movies.map((item) => (
          <Link to={`description/${item.id}`} key={item.id} className="w-full">
            {/* Agregar clases para centrar las cards */}
            <div className="flex justify-center items-center">
              <Card item={item} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileUpcoming;
