import React from "react";
import imageCard from "./ImageCard.module.css";

const ImageCard = ({ src, index }) => {
  return <img src={src} alt={index} className={imageCard.imgCard} />;
};

export default ImageCard;
