import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useGlobalContext } from "../components/context";
import nextagram from "../api/nextagram";
import ImageCard from "../components/ImageCard";
import Loading from "../components/Loading";
import profilePage from "./ProfilePage.module.css";

const ProfilePage = () => {
  const { setLoading, setIsSignedIn, loading } = useGlobalContext();

  const history = useHistory();

  const [currentUser, setCurrentUser] = useState({});

  const [userImages, setUserImages] = useState([]);

  useEffect(() => {
    //check whether the user is signed in or not when it first render
    const auth_token = localStorage.getItem("auth_token");

    if (auth_token) {
      setIsSignedIn(true);
    }

    //fetch data
    const fetchUserAndImage = async () => {
      try {
        setLoading(true);

        const responseArr = await Promise.all([
          nextagram.get("/users/me", {
            headers: { Authorization: `Bearer ${auth_token}` },
          }),
          nextagram.get("/images/me", {
            headers: { Authorization: `Bearer ${auth_token}` },
          }),
        ]);

        const newArr = responseArr.map((response) => {
          const { data } = response;

          return data;
        });

        setLoading(false);
        setCurrentUser(newArr[0]);
        setUserImages(newArr[1]);
      } catch (error) {
        setLoading(false);

        //handle error using toast
        toast.error("An error has occurred!", {
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
      }
    };

    fetchUserAndImage();
  }, []);

  //rendering images
  const renderImages = () => {
    return userImages.map((image, index) => {
      return <ImageCard key={index} src={image} index={index} />;
    });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={profilePage.pageContainer}>
      <section className={profilePage.profileContainer}>
        <img
          src={currentUser.profile_picture}
          alt={currentUser.id}
          className={profilePage.profileImg}
        />

        <div className={profilePage.infoContainer}>
          <p className={profilePage.username}>{`@${currentUser.username}`}</p>
          <div className={profilePage.photosInfoContainer}>
            <p className={profilePage.photosCount}>
              {userImages.length}{" "}
              <span className={profilePage.photosText}>Photos</span>
            </p>
          </div>
          <Link to="/upload_photo" className={profilePage.btnImport}>
            Upload Photos
          </Link>
        </div>
      </section>

      <section className={profilePage.photosSection}>
        <h2 className={profilePage.heading}>Photos</h2>

        <div className={profilePage.photosContainer}>{renderImages()}</div>
      </section>
    </div>
  );
};

export default ProfilePage;
