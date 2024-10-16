import { createSlice } from "@reduxjs/toolkit";


const FavoritesSlice = createSlice({
    name: "favorites",
    initialState: {
        items:JSON.parse(localStorage.getItem('favorites')) || [],
    },
    reducers: {
        addFavorite: (state, action)=>{
            const existingIndex = state.items.findIndex(item => item.imdbID === action.payload.imdbID);
      if (existingIndex === -1) {
        state.items.push(action.payload); 
        localStorage.setItem('favorites', JSON.stringify(state.items))
      }
        },
        removeFavorite: (state, action)=>{
            state.items= state.items.filter(item => item.imdbID !== action.payload.imdbID)
            localStorage.setItem('favorites', JSON.stringify(state.items))
        },
    }
})
export const{addFavorite, removeFavorite} = FavoritesSlice.actions;
export default FavoritesSlice.reducer;