import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { FetchMoviesAndTvShows } from './Store/Slice/MovieAndTvShowSlice';  // Correctly import the thunk action
import NavigationMenu from './Components/NavigationMenu';
import MovieCard from './Components/MovieCard';

function App() {
  const dispatch = useDispatch();

  // Rename state variable to avoid conflict with the import
  const { data: movies = null, loading = false, error = null } = useSelector((state) => state.MoviesAndTvShows || {});
  console.log(movies);
  useEffect(() => {
    // Dispatch the correct thunk action
    dispatch(FetchMoviesAndTvShows("super"));  // Fetch movies from the year 2000
  }, [dispatch]);

  return (
    <>
      <NavigationMenu />
  
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      
      <div className="flex flex-wrap justify-center bg-orange-600">
        {movies?.Search?.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie} 
          />
        ))}
      </div>
    </>
  );
}

export default App;

