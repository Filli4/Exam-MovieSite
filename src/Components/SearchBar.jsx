import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; // Import dispatch from react-redux
import { FetchMoviesAndTvShows } from "./../Store/Slice/MovieAndTvShowSlice"; // Import your action
import MovieCard from "../Components/MovieCard";

function SearchBar() {
  const [movieTitle, setMovieTitle] = useState("");
  const dispatch = useDispatch(); // Initialize dispatch

  // Accessing the movie data, loading, and error from Redux store
  const {
    data: movies,
    loading,
    error,
  } = useSelector((state) => state.MoviesAndTvShows || {});

  const handleSearch = (movieTitle) => {
    if (movieTitle) {
      dispatch(FetchMoviesAndTvShows(movieTitle)); // Fetch movies based on user input
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(movieTitle); // Call handleSearch with the movie title
    setMovieTitle(""); // Clear input after submitting
  };

  return (
    <div className="m-3">
      <form onSubmit={handleSubmit} className="rounded-md">
        <input
          type="text"
          value={movieTitle}
          onChange={(e) => setMovieTitle(e.target.value)} // Update state on input change
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
