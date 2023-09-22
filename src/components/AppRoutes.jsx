import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Favorites from "./Favorites";
import Results from "./Results";
import Description from "./Description";
import GenreCards from "./GenreCards";

function AppRoutes({ user }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {user && <Route path="/favorites" element={<Favorites/>} />}
      <Route path="/login" element={<Login user={user} />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/results/:search" element={<Results />} />
      <Route path="/genre/:genreName/:id" element={<GenreCards />} />
      <Route path="/description/:id" element={<Description user={user}/>} />
    </Routes>
  );
}

export default AppRoutes;
