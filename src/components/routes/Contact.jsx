import React, { useEffect, useState, useRef  } from "react";
import "../Contact/styles/contact.css";
import Social from "../home/Social";
import Header from "../shared/Header";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const sendEmail = (event) => {
    event.preventDefault();
    emailjs.sendForm('service_obuesy6','template_gbw2qeq', event.target, 'NDi3qD-_BawBAAaV6' )
    .then(response => console.log(response))
    .catch(error => console.log(error))

  }


  return (
    <div className="container">
      
      <div className="container__full-contact">
        <Header/>
        <Social/>
        <section className="contact__section" id="contact">
          <h2 className="section__title"> Contact me</h2>
          <span className="section__subtitle">Get in touch me</span>

          <div className="contact__container  grid">
            
            <div className="contact__content-cards">
              <h3 className="contact__title-t">Talk to me</h3>
              <div className="contact__info">
                <div className="contact__card">
                  <i className="bx bx-mail-send contact__card-icon-e"></i>

                  <h3 className="contact__card-title-e">Email</h3>
                  <span className="contact__card-data-e">edisonparraortiz8 <br />@gmail.com</span>

                  <a
                    href="edisonparraortiz8@gmail.com"
                    className="contact__button-e"
                  >
                    Writte me {""}{" "}
                    <i
                      className="bx bx-right-arrow-alt
                       contact__button_icon"
                    ></i>
                  </a>
                </div>

                <div className="contact__card">
                  <i className="bx bxl-whatsapp contact__card-icon-w"></i>

                  <h3 className="contact__card-title-w">Whatsapp</h3>
                  <span className="contact__card-data-w">+573057097994</span>

                  <a
                    href="https://chatwith.io/es/s/edison-1"
                    className="contact__button-w"
                  >
                    Writte me{" "}
                    <i
                      className="bx bx-right-arrow-alt
                      contact__button_icon"
                    ></i>
                  </a>
                </div>

                <div className="contact__card">
                  <i className="bx bxl-messenger contact__card-icon-m"></i>

                  <h3 className="contact__card-title-m">Messenger</h3>
                  <span className="contact__card-data-m">Edison Parra</span>

                  <a href="http://m.me/profile.php?id=100008590836927" className="contact__button-m">
                    Writte me{" "}
                    <i
                      className="bx bx-right-arrow-alt
              contact__button_icon"
                    ></i>
                  </a>
                </div>
              </div>
            </div>


            <div className="contact__content-form">
              <h3 className="contact__title-f">Write your project</h3>

              <div className="contact__form-div-f">
                <form className="contact__form" onSubmit={sendEmail}>
                  <div className="contact__form-div-name">
                    <label className="contact__form-tag-name">Name</label>
                    <input
                      type="name"
                      name="user-name"
                      className="contact__form-input-name"
                      placeholder="Insert your name"
                    />
                  </div>
                  <div className="contact__form-div-email">
                    <label className="contact__form-tag-email">Email</label>
                    <input
                      type="email"
                      name="user-email"
                      className="contact__form-input-email"
                      placeholder="Insert your email"
                    />
                  </div>
                  <div className="contact__form-div-project contact__form-area">
                    <label className="contact__form-tag-project">Project</label>
                    <textarea
                      name="user-message"
                      cols="30"
                      rows="10"
                      className="contact__form-input-project"
                      placeholder="Write your project"
                    ></textarea>
                  </div>
                  <button className="button-send-message ">
                    Send Message
                  </button>
                </form>
              </div>
            </div>


          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
