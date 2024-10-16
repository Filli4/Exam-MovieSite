import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const ApiKey = "a02a3bfa"; // Your actual API key

export const FetchMoviesAndTvShows = createAsyncThunk(
  "MoviesAndTvShows/FetchMoviesAndTvShows",  // Fix action name typo
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
      throw error;  // Ensure error propagates to rejected case
    }
  }
);

const MovieAndTvShowSlice = createSlice({
  name: "MoviesAndTvShows",
  initialState:{
      data: null,
      loading: false,
      error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
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
  },
});


export default MovieAndTvShowSlice.reducer;
