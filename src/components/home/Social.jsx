import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      {/* added rel="noreferrer" */}
      <a
        href="https://twitter.com/fevin2232"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-twitter-alt"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/fevin-patel-838028211"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-linkedin-alt"></i>
      </a>
      <a
        href="https://github.com/fev1n"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
