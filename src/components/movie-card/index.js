import React, { Component } from "react";
import "./style.css";

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-cards col-md-3">
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt="poster"
        />
        <h4>{movie.title}</h4>
        <p>{movie.release_date}</p>
      </div>
    );
  }
}

export default MovieCard;
