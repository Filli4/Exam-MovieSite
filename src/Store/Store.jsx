import { configureStore } from "@reduxjs/toolkit";
import MovieAndTvShowSlice from './Slice/MovieAndTvShowSlice';
import MovieSlice from './Slice/FetchMovies';
import tvShowsSlice from './Slice/FetchTvShows';
import FavoritesSlice from './Slice/FavoritesSlice';

export const store = configureStore({
  reducer: {
    MoviesAndTvShows: MovieAndTvShowSlice,
    Movies: MovieSlice,
    TvShows: tvShowsSlice,
    favorites: FavoritesSlice
  },
});
