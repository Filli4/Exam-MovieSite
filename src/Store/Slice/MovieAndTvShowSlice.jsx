import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';




export const FetchMoviesAndTvShows = createAsyncThunk(
  "MoviesAndTvShows/FetchMoviesAndTvShows",  
  async (movieTitle) => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?s=${movieTitle}&apikey=${import.meta.env.VITE_OMDB_API_KEY}`);
      
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


export const FetchMovieById = createAsyncThunk(
  "MoviesAndTvShows/FetchMovieById",
  async (imdbID) => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=${ApiKey}`);
      
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
