import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import Card from '../commons/Card';

const Favorites = () => {

  const favorites = useSelector((state) => state.favorites.favorites);

  return (
    <section className="w-full h-auto">
      <div className="bg-gray-950 h-7 flex items-center">
        <p className="text-white ml-3">Favorites</p>
      </div>
      {favorites.length === 0 ? (
        <p className="text-white mt-3 ml-3">There are no favorites yet.</p>
      ) : (
        <div className="mx-2 my-3 w-full grid grid-cols-1 md:grid-cols-4 gap-3">
          {favorites.map((item) => (
            <Link to={`/description/${item.id}`} className="flex justify-center" key={item.id}>
              <Card item={item} />
            </Link>
          ))}
        </div>
      )}
    </section>
  )
}

export default Favorites;

