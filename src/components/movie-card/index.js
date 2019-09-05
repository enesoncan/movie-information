import React, { Component } from "react";
import "./style.css";

import { genres } from "../util/genres.js";

class MovieCard extends Component {
  getGenresName = ids => {
    const genreName = [];

    ids.map(genreID => {
      genres.map(genre => {
        if (genreID === genre.id) {
          genreName.push(genre.name);
        }
      });
    });
    return genreName;
  };

  render() {
    const { movie } = this.props;
    const getGenres = this.getGenresName(movie.genre_ids);

    return (
      <div className="movie-cards col-md-3">
        <div className="poster-path">
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt="poster"
          />
        </div>
        <div className="movie-info">
          <h3 className="info-title">{movie.title}</h3>
          <p className="info-release-date">{movie.release_date}</p>
          <p className="info-vote-average">{movie.vote_average}</p>
          <p className="info-genres">{getGenres.join(", ")}</p>
        </div>
      </div>
    );
  }
}

export default MovieCard;
