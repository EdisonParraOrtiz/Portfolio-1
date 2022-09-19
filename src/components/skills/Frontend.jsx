import React from "react";

const Frontend = () => {
  return (
    <div className="skills__content-frontend">
      <h3 className="skills__title">Frontend developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <div className="logo-name-h">
              <i class="bx bx-badge-check"></i>
              <h3 className="skills__name">Html</h3>
              <span className="skills__level-h">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="logo-name-c">
              <i class="bx bx-badge-check"></i>
              <h3 className="skills__name">Css</h3>
              <span className="skills__level-c">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="logo-name-j">
              <i class="bx bx-badge-check"></i>
              <h3 className="skills__name">JavaScript</h3>
              <span className="skills__level-j">Intermediate</span>
            </div>
            
          </div>
          <div className="skills__data">
            <div className="logo-name-r">
              <i class="bx bx-badge-check"></i>
              <h3 className="skills__name-r">React js</h3>
              <span className="skills__level-r">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
