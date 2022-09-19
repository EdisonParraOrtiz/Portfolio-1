import React from "react";
import "./styles/home.css";
import Social from "../home/Social";
import Data from "../home/Data";
import "../home/styles/home.css";
import Header from "../shared/Header";

const Home = () => {
  return (
    <div className="container">
      <div className="container__full-home">
        <Header />
        <main className="home">
          <section className="home-section" id="home">
            <div className="home__container grid">
              <div className="home__content grid">
                <Social />
                  
                {/* </div> */}
                <Data />
                <div className="cont__img">
                  <div className="home__img"></div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;
