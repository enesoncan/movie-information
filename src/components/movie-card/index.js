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
      <div className="movie-cards col-sm-6 col-md-3">
        <div className="card">
          <div className="poster-path">
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt="poster"
            />
          </div>
          <div className="movie-info">
            <h3 className="title">{movie.title}</h3>
            {/* <p className="release-date">{movie.release_date}</p> */}
            <p className="vote-average">
              <span className="atr-icon">
                <i className="material-icons">star</i>
              </span>
              <span className="atr-text">{movie.vote_average}</span>
            </p>
            <p className="genres">
              <span className="atr-icon">
                <i className="material-icons">movie_filter</i>
              </span>
              <span className="atr-text">{getGenres.join(", ")}</span>
            </p>
          </div>
          <div className="movie-buttons">
            <button type="button" className="detail-button">
              Details
            </button>
            <button type="button" className="fav-button">
              <i className="material-icons">favorite_border</i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
