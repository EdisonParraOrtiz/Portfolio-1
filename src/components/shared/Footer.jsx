import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./styles/footer.css";

const Footer = () => {
  

  return (
    <footer className="footer">
        <div className="footer-container">

          <li className="button__home">
            <Link className="button__home-link" to="/" >Home</Link>
          </li>
          <li className="button__about">
            <Link className="button__about-link" to="/about" >About</Link>
          </li>
          <li className="button__skills">
            <Link className="button__skills-link" to="/skills" >Skills</Link>
          </li>
          <li className="button__services">
            <Link className="button__services-link" to="/services" >Services</Link>
          </li>
          <li className="button__portfolio">
            <Link className="button__portfolio-link" to="/portfolio" >Portfolio</Link>
          </li>
          <li className="button__contact">
            <Link className="button__contact-link" to="/contact" >Contact</Link>
          </li>
        
        </div>
    </footer>
    
  );
};

export default Footer;
