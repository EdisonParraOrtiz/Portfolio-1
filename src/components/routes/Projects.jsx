import React from "react";
import Social from "../home/Social";
import "../Projects/styles/project.css";
import Header from "../shared/Header";
import Pokedex from'../../../public/images/Pokedex.jpg'
import RickAndMorty from'../../../public/images/Rickandmorty.jpg'

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
              <a href="https://pokedex-edison.netlify.app/"target="blank" ><img  className="project__imagen-1" src={Pokedex}alt="imagen project" /></a>
              <a
                    href="https://pokedex-edison.netlify.app/" target="blank"
                    className="contact__button"
                  >
                    go project
                    <i
                      className="bx bx-right-arrow-alt
                      contact__button_icon"
                    ></i>
              </a>
 
              <h3 className="project__title-project-p">Pokedex</h3>
              <p className="project__description">
                Using Reactjs redux  <br />  consuming an API
              </p>
            </div>
            
            <div className="project__container-right">
             <a href="https://rick-and-morty-edison.netlify.app/">
               <img  className="project__imagen-2" src={RickAndMorty}alt="imagen project" />
             </a>
             <a
                    href="https://rick-and-morty-edison.netlify.app/" target="blank"
                    className="contact__button"
                  >
                    go project
                    <i
                      className="bx bx-right-arrow-alt
                      contact__button_icon"
                    ></i>
              </a>
             
              <h3 className="project__title-project-r">Rick and Morty</h3>
              <p className="project__description">
                   Using Reactjs axios  <br />  consuming an API
                
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
