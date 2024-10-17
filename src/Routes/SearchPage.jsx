import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchMoviesAndTvShows } from "../Store/Slice/MovieAndTvShowSlice"; // Correct import
import NavigationMenu from "../Components/NavigationMenu";
import SearchBar from "../Components/SearchBar";
import { Helmet } from 'react-helmet-async';

const SearchPage = () => {
  const dispatch = useDispatch();


 
  const handleSearch = (movieTitle) => {
    if (movieTitle) {
      dispatch(FetchMoviesAndTvShows(movieTitle));
    }
  };

  return (
    <div className="bg-orange-600 justify-center items-center flex flex-col flex-wrap">
       <Helmet>
        <title>Search Movies and TV Shows</title>
        <meta name="description" content="Search your favorite movies and TV shows." />
        <meta name="keywords" content="movies, tv shows, search, entertainment, cinema" />
        <link rel="canonical" href="http://localhost:5173/Search" />
      </Helmet>
      <NavigationMenu />
      <SearchBar onSearch={handleSearch} /> 
    </div>
  );
};

export default SearchPage;
