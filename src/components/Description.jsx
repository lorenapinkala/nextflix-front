import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillStar, AiFillHeart } from "react-icons/ai";
import { useSelector } from 'react-redux';
import axios from "axios";

const Description = ({ user }) => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [isFavorite, setIsFavorite] = useState(false);
  const favorites = useSelector((state) => state.favorites.favorites);

  const fetchData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/media/movie/description/${id}`
    );

    setMovie(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const roundedRating = (Math.floor(movie.vote_average * 10) / 10).toString();

  useEffect(() => {
    if (favorites.some((favorite) => favorite.id === movie.id)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [favorites, movie]);

  const handleFavorite = async () => {
    if (!user) return alert("You need to log in");

    await axios
      .post(`${import.meta.env.VITE_BASE_URL}/api/users/add/${user._id}`, movie)
      .then(() => setIsFavorite(true))
      .catch((error) => {
        console.error("Error adding to favorites:", error);
        alert("Something went wrong");
      });
  };

  if (Object.keys(movie).length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col items-center w-full h-full bg-gray-500">
      <div className="bg-zinc-800  h-full w-full flex">
        <div className="w-1/2 h-full mt-20">
          <img className="mx-12 my-12" src={imageUrl} alt="movie image" />
        </div>

        <div className="w-1/2 h-full mt-20">
          <div className="h-full mr-16 mt-12 flex flex-col items-start">
            <h5 className="text-slate-100 text-8xl font-sans font-bold">
              {movie.title}
            </h5>
            <p className="text-slate-100 text-2xl mt-12">{movie.overview}</p>
            <div className="flex mt-12">
              <AiFillStar className="text-yellow-500 text-3xl mt-1" />
              <p className="text-slate-100 text-3xl">{roundedRating}</p>
            </div>

            {!isFavorite ? ( // Mostrar el botón si no es favorito
              <button
                onClick={handleFavorite}
                className="mt-20 mb-4 shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-lg py-1 px-8 rounded h-12 flex justify-center items-center"
              >
                <AiFillHeart className="mt-1 mr-1 text-red-500" /> Add to
                favorites
              </button>
            ) : (
              <p className="mt-20 mb-4 text-slate-100">Already in favorites</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
