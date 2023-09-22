import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Card from "../commons/Card";
import { Link } from "react-router-dom";
import useAxiosData from "../hooks/fetchData";

const GenreCards = () => {
  const { genreName, id } = useParams();

  const link = `${import.meta.env.VITE_BASE_URL}/api/media/movie/genre/${id}`;
  const { data: movies, loading } = useAxiosData(link);

  useEffect(() => {}, [movies]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="w-full h-auto">
      <div className="bg-gray-950 h-7 flex items-center">
        <p className="text-white ml-3">Results of: {genreName}</p>
      </div>
      {movies.length === 0 ? (
        <p className="text-white mt-3 ml-3">There are no movies yet.</p>
      ) : (
        <div className="mx-2 my-3 w-full h-auto grid grid-cols-4 gap-3">
          {movies.map((item) => (
            <Link to={`/description/${item.id}`} className="flex justify-center" key={item.id}>
              <Card item={item} />
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default GenreCards;

