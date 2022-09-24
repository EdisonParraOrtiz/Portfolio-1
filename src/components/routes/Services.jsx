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
            <div className="services__content-frontend">
              <div>
                <i className="uil uil-web-grid services__icon"></i>
                <h3 className="services__title">
                  {" "}
                  Product <br /> Designer
                </h3>
              </div>
              {/* onClick={() => toggleTab(1)} */}
              <span className="services__button" onClick={() => toggleTab(1)}>
                View More{" "}
                <i className="uil uil-arrow-right services__button-icon"></i>
              </span>
              {/* className={toggleState === 1 ? "services__modal active-modal" : "services__modal"} */}
              <div
                className={
                  toggleState === 1
                    ? "services__modal active-modal"
                    : "services__modal"
                }
              >
                <div className="services__modal-content">
                  <i
                    onClick={() => toggleTab(0)}
                    className="uil uil-times services__modal-close"
                  ></i>
                  {/* onClick={() => toggleTab(0)} */}
                  <h3 className="services__modal"> Prdouct / Designer</h3>
                  <p className="services__modal-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quis impedit repudiandae ab. Eos minus repudiandae
                    distinctio maiores, eum pariatur in,
                  </p>

                  <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">
                        I develop the user interface.
                      </p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">
                        Web page development.
                      </p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">
                        I create ux element interactions.
                      </p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">
                        I position you company brand.
                      </p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">
                        Design and mockpus of products for companies.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="services__content-design">
              <div>
                <i className="uil uil-edit services__icon"></i>
                <h3 className="services__title">
                  Visual <br /> Designer
                </h3>
              </div>

              <span className="services__button" onClick={() => toggleTab(1)}>
                View More{" "}
                <i className="uil uil-arrow-right services__button-icon"></i>
              </span>

              <div
                className={
                  toggleState === 1
                    ? "services__modal active-modal"
                    : "services__modal"
                }
              >
                <div className="services__modal-content">
                  <i
                    onClick={() => toggleTab(0)}
                    className="uil uil-times services__modal-close"
                  ></i>

                  <h3 className="services__modal-title">Visual / Designer</h3>
                  <p className="services__modal-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quis impedit repudiandae ab. Eos minus repudiandae
                    distinctio maiores, eum pariatur in,
                  </p>

                  <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">
                        I develop the user interface.
                      </p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">
                        Web page development.
                      </p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">
                        I create ux element interactions.
                      </p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">
                        I position you company brand.
                      </p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">
                        Design and mockpus of products for companies.
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
