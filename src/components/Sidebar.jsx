import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { FaRegHeart } from "react-icons/fa";
import axios from "axios";

const Sidebar = () => {
  const user = useSelector((state) => state.user.user);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const navigate = useNavigate();
  

  const fetchData = async () => {

    const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/media/genre`);

    if (Array.isArray(data)) {
      setGenres(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleGenreChange = (event) => {
    const selectedValue = event.target.value;
    const selectedGenreObject = genres.find(genre => genre.id === parseInt(selectedValue, 10));

    setSelectedGenre(selectedValue);

    if (selectedValue) {
      navigate(`/genre/${selectedGenreObject.name}/${selectedValue}`);
    }
  };


  return (
    <nav className="bg-slate-900 w-1/6 hidden lg:block">
      <div className="w-full h-full flex flex-col space-y-2">
        {user && (
          <Link to="/favorites">
            <button className="w-full h-16  flex justify-start items-center hover:bg-slate-700 active:bg-slate-600 focus:outline-none focus:ring focus:ring-slate-300 rounded text-white">
              <p className="ml-3">My favorites</p><FaRegHeart className="ml-2"/>
            </button>
          </Link>
        )}
        <div className="w-full h-16 ">
          <select
            className="w-full h-full p-2 bg-slate-900 hover:bg-slate-700 active:bg-slate-600 focus:outline-none focus:ring focus:ring-slate-400 rounded text-white"
            value={selectedGenre}
            onChange={handleGenreChange}
          >
           
            <option value="" className="">Select a genre</option>
            {genres.map((genre) => (
               
              <option value={genre.id} key={genre.id}>
                {genre.name}
              </option>
              
            ))}
            
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;

