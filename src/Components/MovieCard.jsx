import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from '../Store/Slice/FavoritesSlice';

function MovieCard({ movie }) {
  const dispatch = useDispatch();

  const handleAddFavorite = () => {
    dispatch(addFavorite(movie));
  };
  const handleRemoveFavorite = () => {
    dispatch(removeFavorite(movie));
  };

  const favorite = useSelector((state) => state.favorites.items)
  const isFavorite = favorite.some((favorit)=> favorit.imdbID === movie.imdbID)

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center justify-center bg-slate-100 rounded-lg p-2 m-2">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-full h-auto rounded-t-lg mb-2"
        />
        <h3 className="font-semibold text-lg text-center flex-wrap w-64">
          {movie.Title}
        </h3>
        <p className="text-center mb-4">{movie.Year}</p>
        <p>{}</p>
        <div className="flex justify-between w-full gap-2">
          <button className="p-3 w-3/4 bg-green-200 rounded-md">Watch</button>
          {isFavorite ? (
            <button
              className="p-3 bg-red-100 rounded-md w-1/4"
              onClick={handleRemoveFavorite}>
              x
            </button>
          ) : (
            <button
              className="p-3 bg-blue-100 rounded-md w-1/4"
              onClick={handleAddFavorite}>
              ♥
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
