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
    <div className='bg-orange-600'>
      <NavigationMenu />
      <h1 className="text-center text-2xl font-semibold mb-4">Movies</h1>
      <div className="flex flex-wrap justify-center bg-orange-600">
        {movies?.Search?.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}  
          />
        ))}
      </div>
    </div>
  );
}

export default FilmListPage;
