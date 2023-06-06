import React, { useState } from "react";
import './skills.css'
import { skilsData } from "../../skillsData";
import ToolItem from "../toolitem/ToolItem";


export default function Skill() {
  const skills = skilsData;
  

  return (
    <>
      <div className="about-tooling-container">
        <h2>Technologies I use</h2>
        <div className="about-tooling">

        {skills.map((skill, index) => (
            <ToolItem
              key={index}
              img={skill.img}
              toolName={skill.toolName}
            />
          ))}


        </div>
      </div>
    </>
  );
}
