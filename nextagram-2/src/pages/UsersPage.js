import React, { useState, useRef, useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import UseFetchUsers from "../components/UseFetchUsers";
import UserCard from "../components/UserCard";
import { useGlobalContext } from "../components/context";
import usersPage from "./UsersPage.module.css";

const UsersPage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { users, usersPageLoading, error, hasMore } = UseFetchUsers(pageNumber);

  const { setIsSignedIn, isSignedIn } = useGlobalContext();

  const history = useHistory();

  //check signed in
  useEffect(() => {
    const auth_token = localStorage.getItem("auth_token");

    if (auth_token) {
      setIsSignedIn(true);
    }
  }, []);

  //for remembering the value of the observer
  const observer = useRef();

  //for last element Ref (this function will be call when the element is render)
  const lastUserElementRef = useCallback(
    (node) => {
      //ignore when it is loading
      if (usersPageLoading) return;

      //disconnect any previous observer
      if (observer.current) observer.current.disconnect();

      //set new observer
      observer.current = new IntersectionObserver((entries) => {
        //check whether the last element is intersecting our viewport && whether there are more users
        if (entries[0].isIntersecting && hasMore) {
          //if true increase page number
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });

      //if the last element exist the ask the observer to observe the element
      if (node) observer.current.observe(node);
    },
    [usersPageLoading, hasMore]
  );

  //rendering user
  const renderUserCards = () => {
    return users.map((user, index) => {
      if (index === users.length - 1) {
        return (
          <UserCard
            ref={lastUserElementRef}
            key={user.id}
            {...user}
            index={index}
          />
        );
      } else {
        return <UserCard key={user.id} {...user} index={index} />;
      }
    });
  };

  //rendering loading
  const renderLoading = () => {
    if (usersPageLoading) {
      return (
        <div className={usersPage.loadingContainer}>
          <div className={usersPage.barsContainer}>
            <span className={usersPage.bar}></span>
            <span className={usersPage.bar}></span>
            <span className={usersPage.bar}></span>
            <span className={usersPage.bar}></span>
          </div>
        </div>
      );
    }

    return null;
  };

  //scroll to the top when btn is clicked
  const onBtnBackTopClick = () => {
    const nav = document.querySelector("#navbar");

    nav.scrollIntoView({ behavior: "smooth" });
  };

  //rendering error
  const renderErrorMessages = () => {
    if (error) {
      return (
        <div className={usersPage.errorContainer}>
          An Error had occurred! Failed to load data.
          <button className={usersPage.btnBackTop} onClick={onBtnBackTopClick}>
            Back to the top
          </button>
        </div>
      );
    }

    return null;
  };

  if (!isSignedIn) {
    history.push("/error");
    return null;
  }

  return (
    <div className={usersPage.pageContainer}>
      <section className={usersPage.usersSection}>{renderUserCards()}</section>
      {renderLoading()}
      {renderErrorMessages()}
    </div>
  );
};

export default UsersPage;
