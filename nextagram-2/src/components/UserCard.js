import React from "react";
import { Link } from "react-router-dom";
import ImageCard from "./ImageCard";
import userCard from "./UserCard.module.css";

const UserCard = React.forwardRef(
  ({ id, profileImage, images, username, index }, ref) => {
    const renderImages = () => {
      return images.map((image, index) => {
        return (
          <ImageCard
            src={image.url}
            index={index}
            key={image.id}
            id={image.id}
          />
        );
      });
    };

    //for setting gray class
    const setGrayClass = () => {
      //set on odd number
      if ((index + 1) % 2 !== 0) {
        return userCard.gray;
      }

      return null;
    };

    //setting heading
    const renderHeading = () => {
      //don't render when there is no photos
      if (images.length === 0) {
        return null;
      }

      return <h2 className={userCard.heading}>Photos</h2>;
    };

    //for scrolling to the top of the page when clicked
    const onBtnSeeMoreClick = () => {
      const nav = document.querySelector("#navbar");

      nav.scrollIntoView({ behavior: "smooth" });
    };

    return (
      <div className={`${userCard.userContainer} ${setGrayClass()}`} ref={ref}>
        <div className={userCard.profileContainer}>
          <img src={profileImage} alt={id} className={userCard.profileImage} />
          <div className={userCard.profileInfoContainer}>
            <Link
              to={`/users/${id}`}
              onClick={onBtnSeeMoreClick}
              className={userCard.username}
            >
              {`@${username}`}
            </Link>

            <p className={userCard.photoInfo}>
              {images.length} <span className={userCard.photoText}>Photos</span>
            </p>
          </div>
        </div>

        <div className={userCard.photosSection}>
          {renderHeading()}
          <div className={userCard.photosContainer}>{renderImages()}</div>
        </div>

        <div className={userCard.btnContainer}>
          <Link
            to={`/users/${id}`}
            onClick={onBtnSeeMoreClick}
            className={userCard.btnSeeMore}
          >
            See More
          </Link>
        </div>
      </div>
    );
  }
);

export default UserCard;
