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
    console.log(this.state.moviesData);
    return (
      <div className="container">
        <h2>{title}</h2>
        {moviesData.map((movie, index) => {
          return <MovieCard key={`movie-${index}`} movie={movie} />;
        })}
      </div>
    );
  }
}

export default MovieList;
