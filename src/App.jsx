import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { FetchMoviesAndTvShows } from './Store/Slice/MovieAndTvShowSlice';  
import NavigationMenu from './Components/NavigationMenu';
import MovieCard from './Components/MovieCard';

function App() {
  const dispatch = useDispatch();

 
  const { data: movies = null, loading = false, error = null } = useSelector((state) => state.MoviesAndTvShows || {});
  console.log(movies);
  useEffect(() => {
  
    dispatch(FetchMoviesAndTvShows("super")); 
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

