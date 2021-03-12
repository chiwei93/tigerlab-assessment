import React from "react";
import FooterLink from "./FooterLink";
import LogoLink from "./LogoLink";
import footer from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={footer.footer}>
      <LogoLink />

      <ul className={footer.list}>
        <li className={footer.item}>
          <FooterLink path="/about">About</FooterLink>
        </li>
        <li className={footer.item}>
          <FooterLink path="/privacy">Privacy</FooterLink>
        </li>
        <li className={footer.item}>
          <FooterLink path="/term">Term</FooterLink>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
