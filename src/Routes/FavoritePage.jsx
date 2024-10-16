// src/Pages/FavoritePage.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import NavigationMenu from '../Components/NavigationMenu';
import MovieCard from '../Components/MovieCard';

function FavoritePage() {
  const favorites = useSelector((state) => state.favorites.items); 

  return (
    <div>
      <NavigationMenu />
      <h1 className="text-center text-2xl font-semibold mb-4">Favorite Movies & TV Shows</h1>
      <div className="flex flex-wrap justify-center">
        {favorites.length > 0 ? (
          favorites.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              Year={movie.Year}
              movie={movie} 
            />
          ))
        ) : (
          <p className="text-center mt-64">No favorites added.</p>
        )}
      </div>
    </div>
  );
}

export default FavoritePage;
