import React from "react";
import { FaBars } from "react-icons/fa";
import { toast } from "react-toastify";
import { useGlobalContext } from "./context";
import NavLink from "./NavLink";
import LogoLink from "./LogoLink";
import nav from "./Navbar.module.css";

const Navbar = () => {
  const {
    isSignedIn,
    setIsSignedIn,
    isSignUpPage,
    setIsSignUpPage,
    showDropdown,
    setShowDropdown,
    setCurrentUserId,
  } = useGlobalContext();

  //set active class
  const active = showDropdown ? nav.active : null;

  //for toggle btn
  const onBtnToggleClick = (event) => {
    event.stopPropagation();
    setShowDropdown(!showDropdown);
  };

  //for logout btn
  const onBtnLogoutClick = () => {
    setIsSignedIn(false);
    setShowDropdown(false);
    setCurrentUserId(null);

    //notify user
    toast.success("You had successfully logged out!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    //remove token from local storage
    localStorage.removeItem("auth_token");
    localStorage.removeItem("currentUserId");
  };

  //render this navbar when not signed in
  if (!isSignedIn) {
    //for login btn
    const onBtnLoginClick = () => {
      setIsSignUpPage(false);
      setShowDropdown(false);
    };

    //for signup btn
    const onBtnSignUpClick = () => {
      setIsSignUpPage(true);
      setShowDropdown(false);
    };

    //for rendering signup or login btn
    const renderLink = () => {
      if (!isSignUpPage) {
        return (
          <NavLink path="/users/sign_up" onClick={onBtnSignUpClick}>
            Sign Up
          </NavLink>
        );
      }

      return (
        <NavLink path="/" onClick={onBtnLoginClick}>
          Login
        </NavLink>
      );
    };

    return (
      <nav
        id="navbar"
        className={nav.navbar}
        onClick={() => setShowDropdown(false)}
      >
        <LogoLink />

        <button className={nav.btnToggle} onClick={onBtnToggleClick}>
          <FaBars />
        </button>

        <ul
          className={`${nav.navList} ${active}`}
          onClick={(e) => e.stopPropagation()}
        >
          <li className={nav.navItem}>{renderLink()}</li>
        </ul>
      </nav>
    );
  }

  //for rendering navbar when signed in
  return (
    <nav
      id="navbar"
      className={nav.navbar}
      onClick={() => setShowDropdown(false)}
    >
      <LogoLink />

      <button className={nav.btnToggle} onClick={onBtnToggleClick}>
        <FaBars />
      </button>

      <ul
        className={`${nav.navList} ${active}`}
        onClick={(e) => e.stopPropagation()}
      >
        <li className={nav.navItem}>
          <NavLink path="/users" onClick={() => setShowDropdown(false)}>
            Home
          </NavLink>
        </li>
        <li className={nav.navItem}>
          <NavLink path="/profile" onClick={() => setShowDropdown(false)}>
            My Profile
          </NavLink>
        </li>
        <li className={nav.navItem}>
          <NavLink path="/" onClick={onBtnLogoutClick}>
            Logout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
