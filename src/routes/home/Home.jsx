import React, {useState, useEffect } from "react";
import image from "/assets/developer-logo.png";
import "./home.css";
import WorkExperience from "../../components/work-exp/WorkExperience";
import Skill from "../../components/skils/Skill";
import Social from "../../components/socialhandles/Social";
import Projects from '../../components/projects/Projects'
import Contact from '../contact/Contact'
import About from "../about/About";
export default function Home() {

  return (
    <>
      <div className="hero-container">
        <div className="hero-item-1">
          <div className="heading-color-1">Hey! my name is</div>
          <h2 className="heading-color-2">Lucky Dewangan</h2>
          <p>
            I'm a Full Stack
            <p>Developer</p>
          </p>
        </div>
        <div className="hero-item-2">
          <img src={image} alt="" />
        </div>
      </div>

      <About/>
      <Skill/>
      <WorkExperience/>
      <Projects/>
      <Contact/>
    </>
  );
}
