import React, { useEffect, useState, useCallback } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { FaTimes, FaPaperPlane, FaSpinner } from "react-icons/fa";
import { useGlobalContext } from "../components/context";
import CommentItem from "../components/CommentItem";
import Loading from "../components/Loading";
import singleImagePage from "./SingleImagePage.module.css";

const SingleImagePage = (props) => {
  const { id } = props.match.params;

  const history = useHistory();

  const { setIsSignedIn, loading, setLoading, isSignedIn } = useGlobalContext();

  const [image, setImage] = useState({});
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [reloadComment, setReloadComment] = useState(false);
  const [commentLoading, setCommentLoading] = useState(true);
  const [commentError, setCommentError] = useState(false);

  //for smoothScrolling the firstElement into view
  const firstCommentRef = useCallback(
    (node) => {
      if (!node) return;

      //for scrolling the latest comment into view
      node.scrollIntoView({ behavior: "smooth" });
    },
    [reloadComment]
  );

  //getting the auth_token and setting signedIn status
  const auth_token = localStorage.getItem("auth_token");

  //fetching data for image
  useEffect(() => {
    if (auth_token) {
      setIsSignedIn(true);
    }

    setLoading(true);

    axios
      .get(`https://insta.nextacademy.com/api/v2/images/${id}`)
      .then((res) => {
        setImage(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.response);

        //notify user that image fail to load
        toast.error("An error had occurred! The image fails to load", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        //navigate to error page
        history.push("/error");
      });
  }, []);

  //for fetching data for all comments of the image
  useEffect(() => {
    setCommentLoading(true);
    setCommentError(false);

    axios
      .get(`https://insta.nextacademy.com/api/v1/images/${id}/comments`, {
        headers: {
          Authorization: `Bearer ${auth_token}`,
        },
      })
      .then((res) => {
        setComments(res.data);
        setCommentLoading(false);
      })
      .catch((err) => {
        console.log(err.response);

        setCommentLoading(false);

        setCommentError(true);
      });
  }, [reloadComment]);

  //for rendering the content of the comment section
  const renderComment = () => {
    //for loading
    if (commentLoading) {
      return (
        <div className={singleImagePage.loadingContainer}>
          <span className={singleImagePage.letter}>L</span>
          <span className={singleImagePage.letter}>o</span>
          <span className={singleImagePage.letter}>a</span>
          <span className={singleImagePage.letter}>d</span>
          <span className={singleImagePage.letter}>i</span>
          <span className={singleImagePage.letter}>n</span>
          <span className={singleImagePage.letter}>g</span>
          <span className={singleImagePage.letter}>...</span>
        </div>
      );
    }

    //for error
    if (commentError) {
      return (
        <div className={singleImagePage.errorContainer}>
          An Error has occurred! Failed to fetch comments. Press the refresh
          button below to refresh comments.
          <button
            className={singleImagePage.btnRefresh}
            onClick={() => setReloadComment(!reloadComment)}
          >
            <FaSpinner className={singleImagePage.spinnerIcon} />
            Refresh
          </button>
        </div>
      );
    }

    //for content
    return comments.map((comment, index) => {
      if (index === 0) {
        return (
          <CommentItem {...comment} key={comment.id} ref={firstCommentRef} />
        );
      }

      return <CommentItem {...comment} key={comment.id} />;
    });
  };

  //for input change
  const onCommentInputChange = (event) => {
    setComment(event.target.value);
  };

  //for submitting comment
  const onFormSubmit = (event) => {
    event.preventDefault();

    if (!comment) return;

    const data = { content: comment };

    //post
    axios
      .post(
        `https://insta.nextacademy.com/api/v1/images/${id}/comments`,
        data,
        {
          headers: {
            Authorization: `Bearer ${auth_token}`,
          },
        }
      )
      .then((res) => {
        //update comment section
        setReloadComment(!reloadComment);

        //empty the input
        setComment("");
      })
      .catch((err) => {
        console.log(err.response);

        setCommentLoading(false);

        //notify the user of error when submitting the comment
        toast.error(
          "An error had occurred! Fails to submit comment. Please try again",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      });
  };

  if (loading) {
    return <Loading />;
  }

  if (!isSignedIn) {
    history.push("/error");
    return null;
  }

  return ReactDOM.createPortal(
    <div className={singleImagePage.overlay} onClick={() => history.goBack()}>
      <div
        className={singleImagePage.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={singleImagePage.btnBack}
          onClick={() => history.goBack()}
        >
          <FaTimes />
        </button>

        <div className={singleImagePage.imageContainer}>
          <img
            src={image.url}
            alt={image.id}
            className={singleImagePage.image}
          />
        </div>

        <div className={singleImagePage.commentSection}>
          <h3 className={singleImagePage.heading}>
            Comments {commentLoading ? "" : `(${comments.length})`}
          </h3>
          <ul className={singleImagePage.commentList}>{renderComment()}</ul>
          <form className={singleImagePage.form} onSubmit={onFormSubmit}>
            <input
              type="text"
              className={singleImagePage.input}
              placeholder="Write a public comment here"
              value={comment}
              onChange={onCommentInputChange}
            />
            <button className={singleImagePage.btnSubmit}>
              <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </div>,
    document.querySelector("#imageModal")
  );
};

export default SingleImagePage;
