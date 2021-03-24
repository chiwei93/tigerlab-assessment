import React from "react";
import "./Photo.css";

const Photo = React.forwardRef(
  ({ alt_description: alt, likes, urls, user }, ref) => {
    return (
      <div className="imageContainer" ref={ref}>
        <img src={urls.regular} className="photoImg" alt={alt} />
        <div className="hoverSection">
          <div className="likeContainer">
            <p className="username">{user.name}</p>
            <p className="like">{`${likes} Likes`}</p>
          </div>

          <a className="link" href={user.links.html}>
            <img
              src={user.profile_image.medium}
              className="linkImg"
              alt={user.name}
            />
          </a>
        </div>
      </div>
    );
  }
);

export default Photo;
