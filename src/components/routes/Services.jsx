import React, { useState } from "react";
import Social from "../home/Social";
import "../services/styles/services.css";
import Header from "../shared/Header";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="container">
      
      <div className="container__full-services">
        <Header/>
        <Social/>
        <section className="services__section" id="services">
          <h2 className="section__title">Services</h2>
          <span className="section__subtitle">What i offer</span>
          <div className="services__container  grid">
            <div className="services__content-fullstack">
              <div>
                <i className="uil uil-web-grid services__icon"></i>
                <h3 className="services__title">
                  {" "}
                  Fullstack <br /> Developer
                </h3>
              </div>
              {/* onClick={() => toggleTab(1)} */}
              <span className="services__button" onClick={() => toggleTab(1)}>
                View More
              </span>
              {/* className={toggleState === 1 ? "services__modal active-modal" : "services__modal"} */}
              <div
                className={
                  toggleState === 1
                    ? "services__modal-f active-modal-f"
                    : "services__modal-f"
                }
              >
                <div className="services__modal-content-f">
                  <i
                    onClick={() => toggleTab(0)}
                    className="uil uil-times services__modal-close"
                  ></i>
                  {/* onClick={() => toggleTab(0)} */}
                  <h3 className="services__modal-title"> Fullstack / Developer</h3>
                  {/* <p className="services__modal-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quis impedit repudiandae ab. Eos minus repudiandae
                    distinctio maiores, eum pariatur in,
                  </p> */}

                  <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">
                        Update and web redesign.
                      </p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">
                      Development of responsive web pages.
                      </p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">
                        E-commerce.
                      </p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">
                      Web hosting and mail.
                      </p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">
                      Web maintenance.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="services__content-visual">
              <div>
                <i className="uil uil-edit services__icon"></i>
                <h3 className="services__title">
                  Visual <br /> Designer
                </h3>
              </div>

              <span className="services__button" onClick={() => toggleTab(2)}>
                View More
              </span>

              <div
                className={
                  toggleState === 2
                    ? "services__modal-v active-modal-v"
                    : "services__modal-v"
                }
              >
                <div className="services__modal-content-v">
                  <i
                    onClick={() => toggleTab(0)}
                    className="uil uil-times services__modal-close"
                  ></i>

                  <h3 className="services__modal-title">Visual / Designer</h3>
                  {/* <p className="services__modal-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quis impedit repudiandae ab. Eos minus repudiandae
                    distinctio maiores, eum pariatur in,
                  </p> */}

                  <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">
                        Logo design. 
                      </p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">
                        Video editing.
                      </p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">
                        Creation of motion graphics and animations.
                      </p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">
                        Artwork design.
                      </p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">
                       Collage and photomontage design.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
