import FilmListPage from "./Routes/FilmListPage";
import TvListPage from "./Routes/TvListPage";
import SearchPage from "./Routes/SearchPage";
import SingelPage from "./Routes/SingelPage";
import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import FavoritePage from './Routes/FavoritePage';


export const Router = createBrowserRouter([
  { path: "/", element: <App/> },
  { path: "/Movies", element: <FilmListPage /> },
  { path: "/TvShow", element: <TvListPage /> },
  { path: "/Search", element: <SearchPage /> },
  { path: "/Favorite", element: <FavoritePage /> },
  { path: "/Detail/:imdbID", element: <SingelPage /> },
]);
