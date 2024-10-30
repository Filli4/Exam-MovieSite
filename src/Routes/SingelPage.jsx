import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import NavigationMenu from "../Components/NavigationMenu";
import { Helmet } from 'react-helmet-async';
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
      
      window.dataLayer.push({
        event: 'add_to_favorites',
        movieTitle: movieDetail.Title,
        movieId: movieDetail.imdbID,
      });
    }
  };

  const handleRemoveFavorite = () => {
    if (movieDetail) {
      dispatch(removeFavorite(movieDetail)); 

      window.dataLayer.push({
        event: 'remove_from_favorites',
        movieTitle: movieDetail.Title,
        movieId: movieDetail.imdbID,
      });
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
       <Helmet>
        <title>{movieDetail?.Title ? `${movieDetail.Title} - Details` : "Movie Details"}</title>
        <meta name="description" content={movieDetail?.Plot || "Find the details of the selected movie."} />
        <meta name="keywords" content={movieDetail?.Genre ? `${movieDetail.Genre}, movies, TV shows, cinema` : "movies, TV shows, cinema"} />
        <link rel="canonical" href={`http://localhost:5173/Detail/${imdbID}`} />
      </Helmet>
    <NavigationMenu />
  
    <div className="flex justify-center items-center min-h-screen w-full bg-orange-600 p-4">
      {movieDetail && (
        <div
          className="bg-orange-700 text-white rounded-lg shadow-lg p-6 w-full sm:w-4/5 md:w-3/4 lg:w-3/5"
          key={movieDetail.imdbID}
        >
          <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center">
         
            <div className="flex flex-col w-auto items-center lg:items-start ">
              <img
                src={movieDetail.Poster}
                alt={movieDetail.Title}
                className="bg-black rounded-xl mb-4 w-auto min-h-auto object-contain"
              />
              <h2 className="text-xl sm:text-2xl font-bold mb-2 text-center lg:text-left">
                {movieDetail.Title}
              </h2>
              <p className="text-sm sm:text-base text-center lg:text-left">
                {movieDetail.Year}
              </p>
            </div>
  
         
            <div className="flex flex-col w-full  lg:flex-row justify-between items-start p-4 rounded-lg gap-2">
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
              className="p-3 bg-red-300 rounded-md text-black w-1/4"
              onClick={handleRemoveFavorite}>
              x
            </button>
          ) : (
            <button
              className="p-3 bg-blue-200 text-black rounded-md w-1/4"
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
