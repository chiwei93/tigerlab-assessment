import React from "react";
import "./NewCard.css";

const NewCard = ({ url, title, num_comments: comment, points, onClick }) => {
  return (
    <div className="cardContainer">
      <h4 className="cardHeading">{title}</h4>
      <p className="cardComment">
        {points} points by pomber | {comment} comments
      </p>
      <div className="cardBtnContainer">
        <a href={url} className="cardLink">
          Read More
        </a>
        <button className="btnDelete" onClick={onClick}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default NewCard;
