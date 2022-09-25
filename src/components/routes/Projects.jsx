import React from "react";
import Social from "../home/Social";
import "../Projects/styles/project.css";
import Header from "../shared/Header";
import ImagenProject from'../../../public/images/imagen-project.png'

const Projects = () => {
  return (
    <div className="container">
      
      <div className="container__full-projects">
        <Header/>
        <Social/>
        <section className="projects__section " id="portfolio">
          <h2 className="section__title">Projects</h2>
          <span className="section__subtitle">My personal work</span>

          <div className="projects-container">
            <div className="project__container-left">
              <img  className="project__imagen-1" src={ImagenProject}alt="imagen project" />
              
              <h3 className="project__title-project">Project 1</h3>
              <p className="project__description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam,
               
              
              </p>
            </div>
            
            <div className="project__container-right">
             <img  className="project__imagen-2" src={ImagenProject}alt="imagen project" />
             
              <h3 className="project__title-project">Project 1</h3>
              <p className="project__description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam,
                
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
