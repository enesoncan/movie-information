import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/header";
import MovieList from "./components/movie-list";
import FavList from "./components/fav-list";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { API_ENDPOINTS } from "./components/config.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/fav-list" component={FavList} />
          <Route path="/" exact>
            <MovieList
              title="Upcoming Movies"
              endpoint={API_ENDPOINTS.UPCOMING}
            />
            <MovieList
              title="Popular Movies"
              endpoint={API_ENDPOINTS.POPULAR}
            />
            <MovieList
              title="Top Rated Movies"
              endpoint={API_ENDPOINTS.TOP_RATED}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
