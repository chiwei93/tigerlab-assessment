import React from "react";
import { Link } from "react-router-dom";
import "./singleCard.css";

const SingleCard = ({ img, name, glass, alcoholic, id }) => {
  return (
    <article className="card">
      <img src={img} alt={name} className="card-image" />

      <div className="card-info-container">
        <h2 className="card-info-heading">{name}</h2>
        <p className="card-info-glass">{glass}</p>
        <p className="card-info-alcohol">{alcoholic}</p>
        <Link to={`/cocktail/${id}`} className="btn-detail">
          details
        </Link>
      </div>
    </article>
  );
};

export default SingleCard;
