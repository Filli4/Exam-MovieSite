
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchTvShows } from '../Store/Slice/FetchTvShows'; 
import MovieCard from '../Components/MovieCard'; 
import NavigationMenu from '../Components/NavigationMenu';

const TvListPage = () => {
  const dispatch = useDispatch();
  
  const { data: series, loading, error } = useSelector((state) => state.TvShows || {}); 
  console.log(series);

  useEffect(() => {
    dispatch(FetchTvShows('hit')); 
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='bg-orange-600'>
      <NavigationMenu /> 
      <h1 className="text-center text-2xl font-semibold mb-4">Tv Shows</h1>
      <div className="flex flex-wrap justify-center bg-orange-600">
        
        {series?.Search?.map((show) => (
          <MovieCard
            key={show.imdbID}
            movie={show}  
          />
        ))}
      </div>
    </div>
  );
};

export default TvListPage;
