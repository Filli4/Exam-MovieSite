import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchMovies } from '../Store/Slice/FetchMovies'; 
import MovieCard from '../Components/MovieCard';
import NavigationMenu from '../Components/NavigationMenu'; 
import { Helmet } from 'react-helmet-async';

function FilmListPage() {
  const dispatch = useDispatch();

  const { data: movies = null, loading = false, error = null } = 
  
  useSelector((state) => state.Movies || { data: [] });

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
       <Helmet>
        <title>Popular Movies from 2000</title>
        <meta name="description" content="Browse popular movies from the year 2000." />
        <meta name="keywords" content="movies, 2000, popular films, entertainment" />
        <link rel="canonical" href="http://localhost:5173/Movies" />
      </Helmet>
      <NavigationMenu />
      <h1 className="text-center text-2xl font-semibold mb-4">Movies</h1>
      <div className="flex flex-wrap justify-center bg-orange-600">
      {movies && movies.map((movie) => (
    <MovieCard key={movie.imdbID} 
    movie={movie} />
  ))}
      </div>
    </div>
  );
}

export default FilmListPage;
