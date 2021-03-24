import React from "react";
import "./Card.css";

const Card = ({ login, avatar_url, html_url }) => {
  return (
    <div className="cardContainer">
      <img src={avatar_url} alt={login} className="cardImg" />
      <p className="username">{login}</p>
      <a href={html_url} className="link">
        View Profile
      </a>
    </div>
  );
};

export default Card;
