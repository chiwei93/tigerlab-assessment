import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaRegHeart } from "react-icons/fa";
import commentItem from "./CommentItem.module.css";

const CommentItem = React.forwardRef(
  (
    { id: commentId, content, created_at: date, liked, posted_by: post },
    ref
  ) => {
    const [isLiked, setIsLiked] = useState(liked);

    const [animation, setAnimation] = useState(false);

    const [postUser, setPostUser] = useState({});

    const { id } = post;

    const auth_token = localStorage.getItem("auth_token");

    useEffect(() => {
      axios
        .get(`https://insta.nextacademy.com/api/v1/users/${id}`)
        .then((res) => {
          setPostUser(res.data);
        })
        .catch((err) => {
          console.log(err.response);

          //failed to load username
        });
    }, []);

    const onLikeBtnClick = () => {
      axios
        .post(
          `https://insta.nextacademy.com/api/v1/comments/${commentId}/toggle_like`,
          {},
          {
            headers: {
              Authorization: `Bearer ${auth_token}`,
            },
          }
        )
        .then((res) => {
          setIsLiked(res.data.liked);
          setAnimation(true);
        })
        .catch((err) => {
          console.log(err.response);
          setIsLiked(false);

          //error handling

          //notify user of error
        });
    };

    const animationClass = animation ? commentItem.spin : null;

    const likedClass = isLiked ? commentItem.liked : null;

    return (
      <li className={commentItem.container} ref={ref}>
        <img
          src={postUser.profileImage}
          alt={postUser.id}
          className={commentItem.image}
        />
        <div className={commentItem.infoContainer}>
          <p className={commentItem.username}>{postUser.username}</p>
          <p className={commentItem.date}>{date}</p>
          <p className={commentItem.comment}>{content}</p>
          <div className={commentItem.btnContainer}>
            <button
              className={`${commentItem.btnLike} ${likedClass}`}
              onClick={onLikeBtnClick}
            >
              <FaRegHeart
                className={`${commentItem.icon} ${animationClass}`}
                onAnimationEnd={() => setAnimation(false)}
              />
              {isLiked ? "Liked" : "Like"}
            </button>
          </div>
        </div>
      </li>
    );
  }
);

export default CommentItem;
