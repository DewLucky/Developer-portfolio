import React from "react";
import githubUrl from '/assets/github-url-logo.svg'
import externalLinkLogo from '/assets/external-link-logo.svg'
import './project.css'
export default function Projects() {
    const projects = [
        {
            image: '/assets/projectsImg/ssl.png',
            title: 'SSL Checker',
            type: 'Internship Project',
            description: 'A simple website which checks if the entered hostname of the website is secure or not by checking SSL Certificate is installed or not.', 
            gitHubUrl: 'https://github.com/saumss/IEEE-Group18',
            liveUrl: '',
            isDeployed: false
        }
    ];

    return (
        <>
            <div className="project-container">
                <h2>My Projects</h2>

                <div className="project-cards-wrapper">

                    {projects.map((element) => {
                        return(
                            <div className="project-card">
                                <div className="project-image-container">
                                    <img src={element.image} alt="" />
                                </div>
                                <h3 className="project-title">{element.title}</h3>
                                <p className="project-type-container">
                                    <span className="project-type">{element.type}</span>
                                    <a href={element.gitHubUrl} className="github-link">
                                        <img src={githubUrl} alt="" />
                                    </a> 
                                    { element.isDeployed && <a href={element.liveUrl} className="live-website">
                                        <img src={externalLinkLogo} alt="" />
                                    </a>}
                                </p>
                                <div>{element.description}</div>
                            </div>
                        )
                    })}


                </div>

            </div>
        </>
    )
}