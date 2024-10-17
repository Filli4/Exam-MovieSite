import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const ApiKey = "a02a3bfa"; 

export const FetchMovies = createAsyncThunk(
  "Movies/FetchMovies",  
  async (movieTitle) => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?s=${movieTitle}&type=movie&apikey=${ApiKey}`);
      
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

const MovieSlice = createSlice({
  name: "Movies",
  initialState:{
      data: null,
      loading: false,
      error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
      builder
          .addCase(FetchMovies.pending, (state) => {
              state.loading = true;
              state.error = null;
          })
          .addCase(FetchMovies.fulfilled, (state, action) => {
              state.loading = false;
              state.data = action.payload;
          })
          .addCase(FetchMovies.rejected, (state, action) => {
              state.loading = false;
              state.error = action.error.message;
          });
  },
});


export default MovieSlice.reducer;
