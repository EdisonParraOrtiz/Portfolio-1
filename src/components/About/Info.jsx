import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i className="about__icon" class="uil uil-award"></i>
            <h4 className="about__title">Experience</h4>
            <span className="about__subtitle">1 year <br /> working</span>
        </div>
        <div className="about__box">
        <i  className="about__icon" class="uil uil-briefcase-alt"></i>
            <h4 className="about__title">Completed</h4>
            <span className="about__subtitle">10 +   <br /> Projects</span>
        </div>
        <div className="about__box">
        <i   className="about__icon" class="uil uil-cloud-question"></i>
            <h4 className="about__title">Education</h4>
            <span className="about__subtitle">Full-time <br /> Intensive</span>
        </div>
       
    </div>
  )
}

export default Info