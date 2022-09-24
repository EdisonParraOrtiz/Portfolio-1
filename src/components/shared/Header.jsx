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
                    Home
                  </NavLink>
                </li>
                <li className="header__item-about">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav__link  active-Link" : "nav__link"
                    }
                    to="/about"
                  >
                     About
                  </NavLink>
                </li>
                <li className="header__item-skills">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav__link  active-Link" : "nav__link"
                    }
                    to="/skills"
                  >
                     Skills
                  </NavLink>
                </li>
                <li className="header__item-services">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav__link  active-Link" : "nav__link"
                    }
                    to="/services"
                  >
                     Services
                  </NavLink>
                </li>
                <li className="header__item-portfolio">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav__link  active-Link" : "nav__link"
                    }
                    to="/portfolio"
                  >
                     Portfolio
                  </NavLink>
                </li>
                <li className="header__item-contact">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav__link  active-Link" : "nav__link"
                    }
                    to="/contact"
                  >
                    Contact
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
