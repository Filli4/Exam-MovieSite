import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from '../Store/Slice/FavoritesSlice';
import { useNavigate } from "react-router-dom";


function MovieCard({ movie, movie2,className  }) {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleAddFavorite = () => {
    dispatch(addFavorite(movie|| movie2));
  };
  const handleRemoveFavorite = () => {
    dispatch(removeFavorite(movie || movie2));
  };

  const handleWatch = () => {
    navigate(`/Detail/${movie?.imdbID || movie2?.imdbID}`);
  };

  const favorite = useSelector((state) => state.favorites.items)
  const isFavorite = favorite.some((favorit)=> favorit.imdbID === (movie?.imdbID || movie2?.imdbID))

  return (
    <div className="flex flex-col items-center justify-evenly p-4 ">
      <div className={`${className}flex flex-col items-center justify-evenly bg-slate-100 rounded-lg p-2 m-2 w-fit h-auto `}>
        <img
          src={movie?.Poster || movie2?.Poster}
          alt={movie?.Title || movie2?.Title}
          className="object-cover w-full h-[350px] rounded-t-lg mb-2"
        />
        <h3 className="font-semibold text-lg text-center flex-wrap w-64">
          {movie?.Title || movie2?.Title}
        </h3>
        <p className="text-center mb-4">{movie?.Year || movie2?.Year}</p>
        <p>{}</p>
        <div className="flex justify-between w-full gap-2">
          <button className="p-3 w-3/4 bg-green-200 rounded-md
          " onClick={handleWatch} >Watch</button>
          {isFavorite ? (
            <button
              className="p-3 bg-red-300 rounded-md w-1/4"
              onClick={handleRemoveFavorite}>
              x
            </button>
          ) : (
            <button
              className="p-3 bg-blue-200 rounded-md w-1/4"
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
