import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import axios from "axios";
import { useGlobalContext } from "./context";
import likeBtn from "./LikeBtn.module.css";

const LikeBtn = ({ imageId }) => {
  const { currentUserId, setCurrentUserId } = useGlobalContext();

  const auth_token = localStorage.getItem("auth_token");

  const [liked, setLiked] = useState(false);
  const [likesNum, setLikesNum] = useState(null);
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setCurrentUserId(localStorage.getItem("currentUserId"));

    const fetchLikesData = async () => {
      try {
        const response = await axios.get(
          `https://insta.nextacademy.com/api/v2/images/${imageId}`
        );

        const likesIdArr = response.data.likes.map((like) => like.id);

        const isLiked = likesIdArr.some((id) => id === Number(currentUserId));

        setLiked(isLiked);
        setLikesNum(likesIdArr.length);
      } catch (error) {
        console.log(error.response);

        setLiked(false);
        setLikesNum(0);
      }
    };

    fetchLikesData();
  }, []);

  const animationClass = animation ? likeBtn.spin : null;

  const likedClass = liked ? likeBtn.liked : null;

  const onLikeBtnClick = () => {
    axios({
      method: "post",
      url: `https://insta.nextacademy.com/api/v1/images/${imageId}/toggle_like`,
      headers: {
        Authorization: `Bearer ${auth_token}`,
      },
    })
      .then((res) => {
        setLiked(res.data.liked);
        setAnimation(true);

        if (res.data.liked) {
          setLikesNum((prevNum) => prevNum + 1);
        } else {
          setLikesNum((prevNum) => prevNum - 1);
        }
      })
      .catch((err) => {
        console.log(err.response);

        setLiked(false);
        setLikesNum((prevNum) => prevNum);
        setAnimation(false);
      });
  };

  return (
    <button
      className={`${likeBtn.btnLike} ${likedClass}`}
      onClick={onLikeBtnClick}
    >
      <FaHeart
        className={`${likeBtn.icon} ${animationClass}`}
        onAnimationEnd={() => setAnimation(false)}
      />
      {liked ? "Liked " : "Like "}
      {likesNum}
    </button>
  );
};

export default LikeBtn;
