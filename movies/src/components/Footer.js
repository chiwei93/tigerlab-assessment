import React from "react";
import Logo from "./Logo";
import NavLink from "./NavLink";
import SocialLink from "./SocialLink";
import footer from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={footer.footer}>
      <Logo />
      <ul className={footer.footerList}>
        <li className={footer.linkItem}>
          <NavLink path="/about">About Us</NavLink>
        </li>
        <li className={footer.linkItem}>
          <NavLink path="/term">Term</NavLink>
        </li>
        <li className={footer.linkItem}>
          <NavLink path="/privacy">Privacy</NavLink>
        </li>
      </ul>

      <ul className={footer.footerList}>
        <li className={footer.socialItem}>
          <SocialLink href="https://facebook.com/" icon="facebook" />
        </li>
        <li className={footer.socialItem}>
          <SocialLink href="https://twitter.com/" icon="twitter" />
        </li>
        <li className={footer.socialItem}>
          <SocialLink href="https://instagram.com/" icon="instagram" />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
