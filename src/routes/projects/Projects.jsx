import React from "react";
import './project.css'
export default function Projects() {
    const projects = [
        {
            image: '../../../public/ssl.png',
            title: 'SSL Checker',
            type: 'Internship Project',
            description: 'A simple website which checks if the entered hostname of the website is secure or not by checking SSL Certificate is installed or not.'
        }
    ];

    return (
        <>
            <div className="project-container">
                <h2>Here are some of my projects</h2>

                <div className="project-cards-wrapper">

                    {projects.map((element) => {
                        return(
                            <div className="project-card">
                                <div className="project-image-container">
                                    <img src={element.image} alt="" />
                                </div>
                                <h3 className="project-title">{element.title}</h3>
                                <p className="project-type">{element.type}</p>
                                <div>{element.description}</div>
                            </div>
                        )
                    })}


                </div>

            </div>
        </>
    )
}