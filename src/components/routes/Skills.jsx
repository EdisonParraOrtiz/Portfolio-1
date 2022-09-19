// import axios from 'axios'
import React, { useEffect, useState } from "react";
import Frontend from "../skills/Frontend";
import Backend from "../skills/Backend";
import "../skills/styles/skills.css";
import Header from "../shared/Header";
import Social from "../home/Social";

const Skills = () => {
  return (
    <div className="container">
      
      <div className="container__full-skills">
      <Header/>
      <Social/>
        <section className="skills section" id="skills">
          <h2 className="section__title"> Skills</h2>
          <span className="section__subtitle">My technical level</span>
          <div className="skills__container  grid">
            <Frontend />
            <Backend />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;
