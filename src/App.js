import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import MovieList from "./components/movie-list";

import { API_ENDPOINTS } from "./components/config.js";

function App() {
  return (
    <div className="App">
      <MovieList title="Popular Movies" endpoint={API_ENDPOINTS.POPULAR} />
      <MovieList title="Top Rated Movies" endpoint={API_ENDPOINTS.TOP_RATED} />
      <MovieList title="Upcoming Movies" endpoint={API_ENDPOINTS.UPCOMING} />
    </div>
  );
}

export default App;
