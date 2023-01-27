import React from "react";
import image1 from "../../assets/developer-logo.svg";
import "./about.css";
import reactImage from "../../assets/react.svg";
import javascript from "../../assets/javascript-logo.svg";

export default function About() {
  return (
    <>
      <div className="about-container">
        <div className="about-item-2">
          <img src={image1} alt="" />
        </div>
        <div className="about-item-1">
          <h2>Hello Everyone!</h2>
          <p>
          I am Lucky Dewangan from <span className="primary">Durg, Chhattisgarh (India)</span>.
            I am pursuing <span className="primary">BTech from National Intitute of Technolog Raipur</span>,
            Chhattisgarh (India).
          </p>
          <p>
            Most of my free time spend on solving <span className="primary">leetcode problems</span> or learning
            technologies.
          </p>
          <p>Currently I am learning <span className="primary">Node.Js, Express and MongoDB</span>.</p>
        </div>
      </div>

      <div className="about-tooling-container">
        <h2>Technologies I use</h2>
        <div className="about-tooling">

          <div className="about-tool-item">
            <div className="box-icon">
              <img src={reactImage} alt="" />
            </div>
            <div className="box-text">
              <p>React</p>
            </div>
          </div>

          <div className="about-tool-item">
            <div className="box-icon">
              <img src={javascript} alt="" />
            </div>
            <div className="box-text">Javascript</div>
          </div>

          <div className="about-tool-item">
            <div className="box-icon">
              <img src={javascript} alt="" />
            </div>
            <div className="box-text">Javascript</div>
          </div>

          <div className="about-tool-item">
            <div className="box-icon">
              <img src={javascript} alt="" />
            </div>
            <div className="box-text">Javascript</div>
          </div>

          <div className="about-tool-item">
            <div className="box-icon">
              <img src={javascript} alt="" />
            </div>
            <div className="box-text">Javascript</div>
          </div>

          <div className="about-tool-item">
            <div className="box-icon">
              <img src={javascript} alt="" />
            </div>
            <div className="box-text">Javascript</div>
          </div>
        </div>
      </div>
    </>
  );
}
