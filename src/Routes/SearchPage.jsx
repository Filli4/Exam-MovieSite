import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchMoviesAndTvShows } from "../Store/Slice/MovieAndTvShowSlice"; // Correct import
import NavigationMenu from "../Components/NavigationMenu";
import SearchBar from "../Components/SearchBar";

const SearchPage = () => {
  const dispatch = useDispatch();


  // If you want to handle the search here, you can define the function:
  const handleSearch = (movieTitle) => {
    if (movieTitle) {
      dispatch(FetchMoviesAndTvShows(movieTitle)); // Fetch movies based on user input
    }
  };

  return (
    <div className="bg-orange-600 justify-center items-center flex flex-col flex-wrap">
      <NavigationMenu />
      <SearchBar onSearch={handleSearch} /> {/* Pass the handleSearch function to SearchBar */}
    </div>
  );
};

export default SearchPage;
