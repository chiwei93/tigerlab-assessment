import React from "react";
import { Link } from "react-router-dom";
import movieCard from "./MovieCard.module.css";

const MovieCard = ({ id, poster_path: poster, title, vote_average: vote }) => {
  return (
    <div className={movieCard.container}>
      <div className={movieCard.imageContainer}>
        <img
          src={`https://image.tmdb.org/t/p/original${poster}`}
          alt={title}
          className={movieCard.image}
        />

        <div className={movieCard.overlay}>
          <p className={movieCard.vote}>Vote: {vote}</p>
          <Link to={`/movie/detail/${id}`} className={movieCard.btnSeeMore}>
            See More Details
          </Link>
        </div>
      </div>
      <p className={movieCard.title}>{title}</p>
    </div>
  );
};

export default MovieCard;
