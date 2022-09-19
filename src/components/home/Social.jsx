import React from "react";
import "./styles/home.css";
import './styles/social.css'

const Social = () => {
  return (
    <div className="home__social">
    
        <button className="button__content-instagram">
          <a
            href="https://www.instagram.com/edison.parr.a/"
            className="home__social-icon"
            target="_blank"
          >
            <i class="uil uil-instagram"></i>
          </a>
        </button>

        <button className="button__content-likendin">
          <a
            href="https://www.linkedin.com/in/edisonparra/"
            className="home__social-icon"
            target="_blank"
          >
            <i class="uil uil-linkedin"></i>
          </a>
        </button>
        <button className="button__content-github">
          <a
            href="https://github.com/EdisonParraOrtiz"
            className="home__social-icon"
            target="_blank"
          >
            <i class="uil uil-github"></i>
          </a>
        </button>

        <button className="button__content-facebook">
          <a
            href="https://www.facebook.com/profile.php?id=100008590836927"
            className="home__social-icon"
            target="_blank"
          >
            <i class="uil uil-facebook-f"></i>
          </a>
        </button>
      
    </div>
  );
};

export default Social;
