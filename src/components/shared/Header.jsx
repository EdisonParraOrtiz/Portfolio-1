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
                
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "header__item-home " : "header__item-home"
                    }
                    to="/"
                  >
                    <i className="uil uil-estate nav__icon"></i> Home
                  </NavLink>
                
                
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "header__item-about  " : "header__item-about"
                    }
                    to="/about"
                  >
                    <i className="uil uil-user nav__icon"></i> About
                  </NavLink>
                
                
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "header__item-skills  " : "header__item-skills"
                    }
                    to="/skills"
                  >
                    <i className="uil uil-file-alt nav__icon"></i> Skills
                  </NavLink>
                
            
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "header__item-services " : "header__item-services"
                    }
                    to="/services"
                  >
                    <i className="uil uil-briefcase-alt nav__icon"></i> Services
                  </NavLink>
                
               
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "header__item-portfolio " : "header__item-portfolio"
                    }
                    to="/portfolio"
                  >
                    <i className="uil uil-scenery nav__icon"></i> Portfolio
                  </NavLink>
             
                
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "header__item-contact  " : "header__item-contact"
                    }
                    to="/contact"
                  >
                    <i className="uil uil-message nav__icon"></i> Contact
                  </NavLink>
                
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
