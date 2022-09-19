import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./styles/header.css";

const Header = () => {
  const [Toggle, showMenu] = useState(false);

  // const navbar = useRef()

  // const handleHamClick = () => {
  //   navbar.current.classList.toggle('header__nav--close')
  // }

  return (
    <header className="header">
          <nav className="nav-container">
            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
              <ul className="nav__list">
                <li className="header__item-home">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav__link  active-Link" : "nav__link"
                    }
                    to="/"
                  >
                    <i className="uil uil-estate nav__icon"></i> Home
                  </NavLink>
                </li>
                <li className="header__item-about">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav__link  active-Link" : "nav__link"
                    }
                    to="/about"
                  >
                    <i className="uil uil-user nav__icon"></i> About
                  </NavLink>
                </li>
                <li className="header__item-skills">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav__link  active-Link" : "nav__link"
                    }
                    to="/skills"
                  >
                    <i className="uil uil-file-alt nav__icon"></i> Skills
                  </NavLink>
                </li>
                <li className="header__item-services">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav__link  active-Link" : "nav__link"
                    }
                    to="/services"
                  >
                    <i className="uil uil-briefcase-alt nav__icon"></i> Services
                  </NavLink>
                </li>
                <li className="header__item-portfolio">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav__link  active-Link" : "nav__link"
                    }
                    to="/portfolio"
                  >
                    <i className="uil uil-scenery nav__icon"></i> Portfolio
                  </NavLink>
                </li>
                <li className="header__item-contact">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav__link  active-Link" : "nav__link"
                    }
                    to="/contact"
                  >
                    <i className="uil uil-message nav__icon"></i> Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <i
              class="uil uil-times nav__close"
              onClick={() => showMenu(!Toggle)}
            ></i>
            <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
              <i class="uil uil-apps"></i>
            </div>
          </nav>
        </header>
    
  );
};

export default Header;
