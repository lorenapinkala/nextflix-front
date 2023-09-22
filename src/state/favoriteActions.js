import axios from "axios";
import { getFavorites } from "./favoriteSlice";

export const requestFavorite = (userId) => async (dispatch) => {
  try {
    
    const { data } = await axios.get(
      `http://localhost:3000/api/users/favorite/${userId}`
    );

    dispatch(getFavorites(data));
  } catch (error) {
    console.error("Error in the favorite request:", error);
    dispatch(logOutUser());
  }
};
