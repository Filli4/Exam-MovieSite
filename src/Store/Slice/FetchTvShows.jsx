
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const ApiKey = "a02a3bfa"; 

export const FetchTvShows = createAsyncThunk(
  "TvShows/FetchTvShows",
  async (tvShowTitle) => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?s=${tvShowTitle}&type=series&apikey=${ApiKey}`);
      
      if (!response.ok) {
        throw new Error("Failed to fetch TV show data");
      }
      
      const data = await response.json();
      return data.Search || [];
    } catch (error) {
      console.error(error);
      throw error; 
    }
  }
);

const tvShowsSlice = createSlice({
  name: "TvShows",
  initialState: {
    data: null || [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchTvShows.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(FetchTvShows.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(FetchTvShows.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default tvShowsSlice.reducer;
