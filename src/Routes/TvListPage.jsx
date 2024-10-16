// src/Pages/TvListPage.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchTvShows } from '../Store/Slice/FetchTvShows'; // Adjust to FetchTvShows
import MovieCard from '../Components/MovieCard'; // Use the same MovieCard component for TV shows
import NavigationMenu from '../Components/NavigationMenu';

const TvListPage = () => {
  const dispatch = useDispatch();
  
  const { data: series, loading, error } = useSelector((state) => state.TvShows || {}); // Fetch from the correct state slice
  console.log(series);

  useEffect(() => {
    dispatch(FetchTvShows('2012','batman')); // Correct action for fetching TV shows
  }, [dispatch]);

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
        {series?.Search?.map((show) => (
          <MovieCard
            key={show.imdbID}
            movie={show}  // Pass the entire show object as 'movie' prop
          />
        ))}
      </div>
    </>
  );
};

export default TvListPage;
