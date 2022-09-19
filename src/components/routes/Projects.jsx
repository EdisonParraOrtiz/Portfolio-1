import React from "react";
import Social from "../home/Social";
import "../Projects/styles/project.css";
import Header from "../shared/Header";

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
            <div className="project__container">
              <img
                src={"../../../public/images//Imagen photo perfil.png"}
                alt=""
                className="project__imagen"
              />
              <h3 className="project__title-project">Project 1</h3>
              <p className="project__description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam,
                voluptas. Nemo aut possimus esse earum similique, veniam, rem
                nisi iusto ad distinctio consequatur eaque illo dolorem quidem
                veritatis. Atque, recusandae.
              </p>
            </div>
            <div className="project__container">
              <img
                src={"../../../public/images//Imagen photo perfil.png"}
                alt=""
                className="project__imagen"
              />
              <h3 className="project__title-project">Project 1</h3>
              <p className="project__description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam,
                voluptas. Nemo aut possimus esse earum similique, veniam, rem
                nisi iusto ad distinctio consequatur eaque illo dolorem quidem
                veritatis. Atque, recusandae.
              </p>
            </div>
            <div className="project__container">
              <img
                src={"../../../public/images//Imagen photo perfil.png"}
                alt=""
                className="project__imagen"
              />
              <h3 className="project__title-project">Project 1</h3>
              <p className="project__description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam,
                voluptas. Nemo aut possimus esse earum similique, veniam, rem
                nisi iusto ad distinctio consequatur eaque illo dolorem quidem
                veritatis. Atque, recusandae.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
