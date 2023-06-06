import React from 'react'
import './workExperience.css'
export default function WorkExperience() {
  return (
    <div className="work-experience">
        <h2 className="heading-color-2 experience-heading">Work Experience</h2>
        <div className="experiences-container">
         <div className="experience-item">
            <p className="company"><span className="heading-color-1">Alhansat Technologies</span></p>
            <p className="position"><span >Full Stack Developer Intern</span></p>
            <div className="duration"><span>Dec 2022</span> to <span>Jan 2023</span></div>
            <div className="contribution">
              <ul>
                <li> Developed a Full Stack Web Application that provides SSL-Certificate information of a given hostname by the user.</li>
                <li>Led a team of 5 where I added query functionality using NodeJs, Express to handle postrequest for a custom input.</li>
                <li> Used fetch API to send request to backend and displayed the results using components in Svelte.</li>
                <li>Added error handling for a critical use case.</li>
              </ul>
            </div>
         </div>
        </div>

      </div>
  )
}
