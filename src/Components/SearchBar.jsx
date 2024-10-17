import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { FetchMoviesAndTvShows } from "./../Store/Slice/MovieAndTvShowSlice"; 
import MovieCard from "../Components/MovieCard";

function SearchBar() {
  const [movieTitle, setMovieTitle] = useState("");
  const dispatch = useDispatch(); 

  
  const {
    data: movies,
    loading,
    error,
  } = useSelector((state) => state.MoviesAndTvShows || {});

  const handleSearch = (movieTitle) => {
    if (movieTitle) {
      dispatch(FetchMoviesAndTvShows(movieTitle)); 
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(movieTitle); 
    setMovieTitle(""); 
  };

  return (
    <div className="m-3">
      <form onSubmit={handleSubmit} className="rounded-md">
        <input
          type="text"
          value={movieTitle}
          onChange={(e) => setMovieTitle(e.target.value)} 
          placeholder="Enter movie title"
          className="border p-2 rounded-lg"
        />
        <button
          type="submit"
          className="bg-lime-500 text-white p-2 ml-7 rounded-lg">
          Search Movies
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <div className="flex flex-wrap justify-center w-fit items-center mx-2">
        {movies?.Search?.map(
          (movie) =>
            movie?.imdbID && <MovieCard key={movie.imdbID} movie={movie} />,
        )}
      </div>
    </div>
  );
}

export default SearchBar;
