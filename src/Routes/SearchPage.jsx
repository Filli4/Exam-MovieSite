import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchMoviesAndTvShows } from "../Store/Slice/MovieAndTvShowSlice"; // Correct import
import NavigationMenu from "../Components/NavigationMenu";
import SearchBar from "../Components/SearchBar";

const SearchPage = () => {
  const dispatch = useDispatch();


 
  const handleSearch = (movieTitle) => {
    if (movieTitle) {
      dispatch(FetchMoviesAndTvShows(movieTitle));
    }
  };

  return (
    <div className="bg-orange-600 justify-center items-center flex flex-col flex-wrap">
      <NavigationMenu />
      <SearchBar onSearch={handleSearch} /> 
    </div>
  );
};

export default SearchPage;
