import React, { Component } from "react";
import "./style.css";

import { API_KEY } from "../config.js";
import MovieCard from "../movie-card";

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moviesData: []
    };
  }

  componentDidMount() {
    this.getMoviesList();
  }

  // fetch movies data
  getMoviesList = () => {
    const { endpoint } = this.props;
    fetch(
      `https://api.themoviedb.org/3/movie/${endpoint}?api_key=${API_KEY}&language=en-US`
    )
      .then(results => {
        return results.json();
      })
      .then(json => {
        const moviesData = json.results;
        this.setState({
          moviesData
        });
      });
  };

  render() {
    const { moviesData } = this.state;
    const { title } = this.props;
    return (
      <div className="container">
        <div className="row mt-2">
          <div className="section-title mb-4">
            <h2>{title}</h2>
          </div>
        </div>
        <div className="row mt-5">
          {moviesData.map((movie, index) => {
            return <MovieCard key={`movie-${index}`} movie={movie} />;
          })}
        </div>
      </div>
    );
  }
}

export default MovieList;
