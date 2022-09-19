import React from "react";

const Backend = () => {
  return (
    <div className="skills__content-backend">
      <h3 className="skills__title">Backend developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <div  className="logo-name-n" >
              <i class="bx bx-badge-check"></i>
              <h3 className="skills__name">Nodejs</h3>
              <span className="skills__level-n">Basic</span>
            </div>
          </div>
          <div className="skills__data-">
            <div  className="logo-name-m" >
              <i class="bx bx-badge-check"></i>
              <h3 className="skills__name">Mongo DB</h3>
              <span className="skills__level-m">basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
