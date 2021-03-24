import React from "react";
import "./MovieCard.css";

const MovieCard = ({ poster_path: poster, title, release_date }) => {
  return (
    <div className="card">
      <img
        src={`https://image.tmdb.org/t/p/original${poster}`}
        alt={title}
        className="cardImage"
      />
      <div className="hoverSection">
        <p className="cardTitle">{title}</p>
        <p className="cardDate">{release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
