import React from "react";
import { Link } from "react-router-dom";
import { FaImage } from "react-icons/fa";
import LikeBtn from "./LikeBtn";
import imageCard from "./ImageCard.module.css";

const ImageCard = ({ src, index, id }) => {
  return (
    <div className={imageCard.container}>
      <img src={src} alt={index} className={imageCard.imgCard} />

      <div className={imageCard.btnContainer}>
        <LikeBtn imageId={id} />
        <Link to={`/image/${id}`} className={imageCard.btnSeeImg}>
          <FaImage className={imageCard.icon} />
          see full image
        </Link>
      </div>
    </div>
  );
};

export default ImageCard;
