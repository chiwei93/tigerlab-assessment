import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import ImageCard from "../components/ImageCard";
import Loading from "../components/Loading";
import nextagram from "../api/nextagram";
import { useGlobalContext } from "../components/context";
import singleUser from "./SingleUserPage.module.css";

const SingleUserPage = (props) => {
  const [user, setUser] = useState({});

  const history = useHistory();

  const [images, setImages] = useState([]);

  const { id } = props.match.params;

  const { setLoading, loading, setIsSignedIn } = useGlobalContext();

  //check whether signed in
  useEffect(() => {
    const auth_token = localStorage.getItem("auth_token");

    if (auth_token) {
      setIsSignedIn(true);
    }

    //fetch user data
    const fetchUserAndImage = async () => {
      try {
        setLoading(true);

        const responses = await Promise.allSettled([
          nextagram.get(`/users/${id}`),
          axios.get(`https://insta.nextacademy.com/api/v2/images?userId=${id}`),
        ]);

        const dataArr = responses.map((response) => {
          const { value } = response;

          const { data } = value;

          return data;
        });

        setUser(dataArr[0]);
        setImages(dataArr[1]);
        setLoading(false);
      } catch (error) {
        setLoading(false);

        //deal with error
        toast.error("An error has occurred!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        history.push("/error");
      }
    };

    fetchUserAndImage();
  }, []);

  const renderImages = () => {
    return images.map((image, index) => {
      return <ImageCard key={index} src={image.url} index={index} />;
    });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={singleUser.pageContainer}>
      <section className={singleUser.profileContainer}>
        <img
          src={user.profileImage}
          alt={user.id}
          className={singleUser.profileImg}
        />

        <div className={singleUser.infoContainer}>
          <p className={singleUser.username}>{`@${user.username}`}</p>
          <div className={singleUser.photosInfoContainer}>
            <p className={singleUser.photosCount}>
              {images.length}{" "}
              <span className={singleUser.photosText}>Photos</span>
            </p>
          </div>
        </div>
      </section>

      <section className={singleUser.photosSection}>
        <h2 className={singleUser.heading}>Photos</h2>

        <div className={singleUser.photosContainer}>{renderImages()}</div>
      </section>
    </div>
  );
};

export default SingleUserPage;
