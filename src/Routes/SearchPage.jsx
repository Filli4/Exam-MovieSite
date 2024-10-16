import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchMoviesAndTvShows } from "../Store/Slice/MovieAndTvShowSlice"; // Correct import
import NavigationMenu from "../Components/NavigationMenu";
import SearchBar from "../Components/SearchBar";

const SearchPage = () => {
  const [movieTitle, setMovieTitle] = useState("");
  const dispatch = useDispatch();

  // Access the correct slice of state: 'MoviesAndTvShows'
  const { data: movies, loading, error } = useSelector((state) => state.MoviesAndTvShows || {});

  const handleSearch = (e) => {
    e.preventDefault();
    if (movieTitle) {
      dispatch(FetchMoviesAndTvShows(movieTitle));
    }
  };

  return (
    <>
      <NavigationMenu />
      <SearchBar />
    </>
  );
};

export default SearchPage;
