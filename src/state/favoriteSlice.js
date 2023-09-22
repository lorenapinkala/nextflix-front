import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
  name: "favorites",

  initialState: {
    favorites: [],
  },

  reducers: {
    getFavorites: (state, action) => {
      state.favorites = [...action.payload];
    },
  },
});

export default favoriteSlice.reducer;
export const { getFavorites } = favoriteSlice.actions;
