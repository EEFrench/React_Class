import React from "react";

const MovieCard = (props) => (
  <div className="movie-card">
    <img
      src={props.posterUrl}
      alt={`${props.title} poster`}
      className="movie-card__poster"
    />

    <h2 className="movie-card__title">{props.title}</h2>

    <span className="movie-card__type">{props.type}</span>
  </div>
);

export default MovieCard;