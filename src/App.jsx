import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "./state/ userActions";
import { requestFavorite } from './state/favoriteActions';
import AppRoutes from "./components/AppRoutes";

function App() {
  const user = useSelector((state) => state.user.user);
  const [userId, setUserId] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(getUser());
    }   
  }, [dispatch]);

  useEffect(() => {
 
    if (user && user._id) {
      setUserId(user._id);
      dispatch(requestFavorite(user._id));
    }
  }, [user, dispatch]);

  return (
    <>
      <div className="h-full w-full bg-orange-400">
        <Navbar user={user} />
        <div className="flex bg-zinc-600  min-h-screen w-full">
          <Sidebar/>
          <AppRoutes user={user} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
