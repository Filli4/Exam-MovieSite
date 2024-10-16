import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import NavigationMenu from "../Components/NavigationMenu";
import { useDispatch, useSelector } from "react-redux";
import { FetchMovieById } from "./../Store/Slice/MovieAndTvShowSlice";
import { addFavorite, removeFavorite } from '../Store/Slice/FavoritesSlice';

function SingelPage() {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const { movieDetail, loading, error } = useSelector(
    (state) => state.MoviesAndTvShows,
  );

  const favorite = useSelector((state) => state.favorites.items)
  const isFavorite = favorite.some((favorit)=> favorit.imdbID === imdbID)
  useEffect(() => {
    dispatch(FetchMovieById(imdbID));
  }, [dispatch, imdbID]);

  const handleAddFavorite = () => {
    if (movieDetail) {
      dispatch(addFavorite(movieDetail)); 
    }
  };

  const handleRemoveFavorite = () => {
    if (movieDetail) {
      dispatch(removeFavorite(movieDetail)); 
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col">
    <NavigationMenu />
  
    <div className="flex justify-center items-center min-h-screen w-full bg-orange-600 p-4">
      {movieDetail && (
        <div
          className="bg-orange-700 text-white rounded-lg shadow-lg p-6 w-full sm:w-4/5 md:w-3/4 lg:w-3/5"
          key={movieDetail.imdbID}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center">
         
            <div className="flex flex-col w-full lg:w-1/3 items-center lg:items-start mb-4 lg:mb-0">
              <img
                src={movieDetail.Poster}
                alt={movieDetail.Title}
                className="rounded-lg mb-4 w-full h-64 object-fill"
              />
              <h2 className="text-xl sm:text-2xl font-bold mb-2 text-center lg:text-left">
                {movieDetail.Title}
              </h2>
              <p className="text-sm sm:text-base text-center lg:text-left">
                {movieDetail.Year}
              </p>
            </div>
  
         
            <div className="flex flex-col w-full lg:w-2/3 lg:flex-row justify-between items-start p-4 rounded-lg gap-2">
              <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
                <p className="font-bold text-md sm:text-lg mb-2">Description:</p>
                <p className="text-sm sm:text-lg mb-4">{movieDetail.Plot}</p>
              </div>
              <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
                <p className="font-bold text-md sm:text-lg mb-2">Genre:</p>
                <p className="text-sm sm:text-lg mb-4">{movieDetail.Genre}</p>
                <p className="font-bold text-md sm:text-lg mb-2">Actors:</p>
                <p className="text-sm sm:text-lg mb-4">{movieDetail.Actors}</p>
              </div>
              <div className="w-full lg:w-1/3">
                <p className="font-bold text-md sm:text-lg mb-2">Writers:</p>
                <p className="text-sm sm:text-lg mb-4">{movieDetail.Writer}</p>
              </div>
            </div>
          </div>
  
       
          <div className="flex justify-center lg:justify-end mt-4">
          {isFavorite ? (
            <button
              className="p-3 bg-red-100 rounded-md text-black w-1/4"
              onClick={handleRemoveFavorite}>
              x
            </button>
          ) : (
            <button
              className="p-3 bg-blue-100 text-black rounded-md w-1/4"
              onClick={handleAddFavorite}>
              ♥
            </button>
          )}
          </div>
        </div>
      )}
    </div>
  
  

    </div>
  );
}

export default SingelPage;
