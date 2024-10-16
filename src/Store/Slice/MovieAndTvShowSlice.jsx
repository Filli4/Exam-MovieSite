import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const ApiKey = "a02a3bfa"; 

// Thunk for fetching movies and TV shows by title
export const FetchMoviesAndTvShows = createAsyncThunk(
  "MoviesAndTvShows/FetchMoviesAndTvShows",  // Fixed action name to be more appropriate
  async (movieTitle) => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?s=${movieTitle}&apikey=${ApiKey}`);
      
      if (!response.ok) {
        throw new Error("Failed to fetch Movie data");
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error; 
    }
  }
);

// Thunk for fetching a specific movie by ID
export const FetchMovieById = createAsyncThunk(
  "MoviesAndTvShows/FetchMovieById",
  async (imdbID) => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=${ApiKey}`);
      
      if (!response.ok) {
        throw new Error("Failed to fetch Movie details");
      }
      
      const data = await response.json();
      return data;  
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

const MovieAndTvShowSlice = createSlice({
  name: "MoviesAndTvShows",
  initialState: {
    data: null,
    movieDetail: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Handle FetchMoviesAndTvShows
    builder
      .addCase(FetchMoviesAndTvShows.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(FetchMoviesAndTvShows.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(FetchMoviesAndTvShows.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    // Handle FetchMovieById
    builder
      .addCase(FetchMovieById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(FetchMovieById.fulfilled, (state, action) => {
        state.loading = false;
        state.movieDetail = action.payload;
      })
      .addCase(FetchMovieById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default MovieAndTvShowSlice.reducer;
