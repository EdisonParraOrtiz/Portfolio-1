// import axios from 'axios'
import React,{useEffect, useState} from 'react'
import Frontend from '../skills/Frontend'
import Backend from '../skills/Backend'
import '../skills/styles/skills.css'


const Skills = () => {

  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">  Skills</h2>
      <span className="section__subtitle">My technical level</span>
      <div className="skills__container container grid">
        <Frontend/>
        <Backend/>
      </div>
    </section>
  )
}

export default Skills