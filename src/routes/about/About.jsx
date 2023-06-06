import React from "react";
import "./about.css";

import profile from "/assets/profile-picture.png";

export default function About() {
  return (
    <>
      <div className="home-intro-container">
        <h3 className="home-intro-heading heading-color-2">
          <span>About Me</span>
        </h3>
        <div className="home-intro-items-container">
          <div className="home-intro-item-1">
            <p>
              It all started from a excitement to win a hackathon prize. Back
              then I just learned HTML and CSS. Built a bare minimum UI for
              appointment management web app for local clinics. We got 3rd prize
              from hackathon. Then I started exploring about web.
            </p>

            <p>
              From HTML/CSS to{" "}
              <span className="heading-color-1 normal-wt">
                Full Stack Developer
              </span>{" "}
              it's been a long journey, though I am still learning it. I am
              skilled at developing user-friendly, visually appealing web
              applications.
            </p>

            <p>
              My technical skill set inludes{" "}
              <span className="heading-color-1 normal-wt">
                React, C++, Javascript, Node.Js, Express, MongoDB
              </span>
              . I am currently learning about{" "}
              <span className="heading-color-1 normal-wt">
                Containerization
              </span>
              , <span className="heading-color-1 normal-wt">CI/CD</span> and{" "}
              <span className="heading-color-1 normal-wt">Testing</span>.
            </p>
          </div>
          <div className="home-intro-item-2">
            <div>
              <img src={profile} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
