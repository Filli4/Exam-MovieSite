import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchMoviesAndTvShows } from './../Store/Slice/MovieAndTvShowSlice';
import MovieCard from '../Components/MovieCard';

function SearchBar() {
  const [movieTitle, setMovieTitle] = useState('');
  const dispatch = useDispatch();

  // Access the correct slice of state: 'MoviesAndTvShows'
  const { data: movies, loading, error } = useSelector((state) => state.MoviesAndTvShows || {});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (movieTitle) {
      dispatch(FetchMoviesAndTvShows(movieTitle)); // Fetch movies based on user input
    }
    setMovieTitle(''); // Clear input after submitting
  };

  return (
    <div className='m-3'>
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
          className="bg-lime-500 text-white p-2 ml-7 rounded-lg"
        >
          Search Movies
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {movies?.Search && movies.Search.length > 0 && (
        <div className='flex flex-wrap justify-start w-fit items-center mx-2'>
         {movies.Search.map((movie, index) => {
      console.log(movie); // Log the movie object to inspect its properties
      return movie?.imdbID ? (
        <MovieCard
          key={movie.imdbID}
          title={movie.Title}
          poster={movie.Poster}
          description={movie.Year}
        />
      ) : (
        <p key={index}>Invalid movie data</p>
      );
    })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
