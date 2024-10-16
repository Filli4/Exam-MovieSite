import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchMovies } from '../Store/Slice/FetchMovies'; 
import MovieCard from '../Components/MovieCard';
import NavigationMenu from '../Components/NavigationMenu'; 

function FilmListPage() {
  const dispatch = useDispatch();

  const { data: movies = null, loading = false, error = null } = 
  
  useSelector((state) => state.Movies || {});

  useEffect(() => {
   
    dispatch(FetchMovies("2000")); 
    
    
  }, [dispatch]);
console.log(movies);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <NavigationMenu />
      
      <div className="flex flex-wrap justify-center">
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

export default FilmListPage;
