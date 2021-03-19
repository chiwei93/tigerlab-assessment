import React from "react";
import * as Scroll from "react-scroll";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
import Logo from "./Logo";
import NavLink from "./NavLink";
import SocialLink from "./SocialLink";
import SearchInput from "./SearchInput";
import navbar from "./Navbar.module.css";

const Navbar = () => {
  const { isHomePage, showSidebar, setShowSidebar } = useGlobalContext();

  let ScrollLink = Scroll.Link;

  const onBtnToggleClick = () => {
    setShowSidebar(!showSidebar);
  };

  const setActiveClass = showSidebar ? navbar.active : null;

  if (isHomePage) {
    return (
      <nav className={navbar.navbar} id="navbar">
        <Logo />

        <button
          className={`${navbar.btnToggle} ${setActiveClass}`}
          onClick={onBtnToggleClick}
        >
          <FaBars />
        </button>

        <div className={`${navbar.containerCollapsible} ${setActiveClass}`}>
          <SearchInput />

          <ul className={navbar.navList}>
            <li className={navbar.navItem}>
              <ScrollLink
                to="trendingSection"
                className={navbar.navLink}
                smooth
                duration="500"
                onClick={() => setShowSidebar(false)}
              >
                Trending
              </ScrollLink>
            </li>
            <li className={navbar.navItem}>
              <ScrollLink
                to="upcomingSection"
                className={navbar.navLink}
                smooth
                duration="500"
                onClick={() => setShowSidebar(false)}
              >
                Upcoming
              </ScrollLink>
            </li>
            <li className={navbar.navItem}>
              <NavLink path="/about">About Us</NavLink>
            </li>
            <li className={navbar.navItem}>
              <NavLink path="/term">Term</NavLink>
            </li>
            <li className={navbar.navItem}>
              <NavLink path="privacy">Privacy</NavLink>
            </li>
            <li className={navbar.navItem}>
              <div className={navbar.socialContainer}>
                <SocialLink href="https://facebook.com/" icon="facebook" />
                <SocialLink href="https://twitter.com/" icon="twitter" />
                <SocialLink href="https://instagram.com/" icon="instagram" />
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  return (
    <nav className={navbar.navbar} id="navbar">
      <Logo />

      <button
        className={`${navbar.btnToggle} ${setActiveClass}`}
        onClick={onBtnToggleClick}
      >
        <FaBars />
      </button>

      <div className={`${navbar.containerCollapsible} ${setActiveClass}`}>
        <SearchInput />

        <ul className={navbar.navList}>
          <li className={navbar.navItem}>
            <NavLink path="/movies/popular/1">Popular</NavLink>
          </li>
          <li className={navbar.navItem}>
            <NavLink path="/movies/trending/1">Trending</NavLink>
          </li>
          <li className={navbar.navItem}>
            <NavLink path="/movies/top_rated/1">Top Rated</NavLink>
          </li>
          <li className={navbar.navItem}>
            <NavLink path="/movies/upcoming/1">Upcoming</NavLink>
          </li>
          <li className={navbar.navItem}>
            <div className={navbar.socialContainer}>
              <SocialLink href="https://facebook.com/" icon="facebook" />
              <SocialLink href="https://twitter.com/" icon="twitter" />
              <SocialLink href="https://instagram.com/" icon="instagram" />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
