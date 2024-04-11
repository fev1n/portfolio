import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h2 className="footer__title">
          I embrace challenges to learn and thrive ☻
        </h2>
        {/* <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#expertise" className="footer__link">
              Expertise
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
        </ul> */}
        <div className="footer__social">
          <a
            href="https://twitter.com/fevin2232"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/fevin-patel-838028211"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://github.com/fev1n"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-github"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; Handcrafted by Fevin Patel 🧑‍💻 in 2024.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
