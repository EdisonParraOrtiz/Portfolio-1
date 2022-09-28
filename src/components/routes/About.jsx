import React, { useState } from "react";
import "../About/styles/about.css";
import AboutImg from "../../../public/images/about.jpg";
import CV from "../../../public/images/Edison Parra-Cv.pdf";
import Info from "../About/Info";
import Header from "../shared/Header";
import Social from "../home/Social";

const About = () => {

  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  }
  return (
    <div id='about' className="container">
      
      <div className="container__full-about">
        <Header/>
        <Social />
        <section className="about__section" id="about">

          <h2 className="section__title"> About Me</h2>
          <span className="section__subtitle">My introduction
          </span>
          <div className="about__container ">
            <div className="about__img">
              <div className="perf-img"></div>
            </div>

            <div className="about__data">
              <p className="about__description">
              My goal is to work to achieve the objectives proposed by the company or client and also <strong>provide added value in terms of innovation and quality.</strong>
              </p>

              <a download="" href={CV}
                    target="blank"
                    className="button__download-cv">
                    Download CV
              </a>

              <span className="about__button-viewmore" onClick={() => toggleTab(3)}>
               View More
            
              </span>
              <div  className={toggleState === 3 ? "about__modal-f active-modal-a"
                 : "services__modal-f" }>
               <div className="about__modal-content-f">
                 <i onClick={() => toggleTab(0)} className="uil uil-times about__modal-close"></i>
                {/* onClick={() => toggleTab(0)} */}
                
                 <Info />
                 

               </div>
              </div>
              

         


              
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;



