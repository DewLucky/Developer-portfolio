import React from "react";
import githubUrl from '/assets/github-url-logo.svg'
import externalLinkLogo from '/assets/external-link.svg'
import './project.css'
export default function Projects() {
    const projects = [
        {
            image: '/assets/projectsImg/ssl1.png',
            title: 'SSL Checker',
            type: 'Internship Project',
            description: 'A simple website which checks if the entered hostname of the website is secure or not by checking SSL Certificate is installed or not.', 
            gitHubUrl: 'https://github.com/DewLucky/IEEE-Group18',
            liveUrl: 'https://sslchecker.netlify.app/',
            isDeployed: true,
        },

        {
            image: '/assets/projectsImg/social.png',
            title: 'DevSocials',
            type: 'Personal Project',
            description: 'This is a full stack social media website. A user can create, reat, update and delete his/her post, implimented login authentication, dynamic loading of data, like, follow etc features.', 
            gitHubUrl: 'https://github.com/DewLucky/DevSocials',
            liveUrl: 'https://example.com',
            isDeployed: false,
        },

        {
            image: '/assets/projectsImg/memory.png',
            title: 'Memory Game',
            type: 'Personal Project',
            description: 'A game in which the player has to click the indicated boxes in the same order. The level increases with each successful attepmt. My highest level is 15, and yours?.', 
            gitHubUrl: 'https://github.com/DewLucky/Memory-Game/',
            liveUrl: 'https://dewlucky.github.io/Memory-Game/',
            isDeployed: true
        },

        {
            image: '/assets/projectsImg/notefy.png',
            title: 'Notes App',
            type: 'Personal Project',
            description: 'This is a one stop solution for keeping and organize all your thoughts and plans at Notefy. You can create, edit, archive and delete your notes.', 
            gitHubUrl: 'https://github.com/DewLucky/NotesApp/',
            liveUrl: 'https://dewlucky.github.io/NotesApp/',
            isDeployed: true
        },
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
                                    <div className="project-type">{element.type}</div>
                                    <div className="project-links">
                                        <a href={element.gitHubUrl} className="github-link">
                                            <img src={githubUrl} alt="" />
                                        </a> 
                                        {element.isDeployed && <a href={element.liveUrl} className="live-website">
                                            <img src={externalLinkLogo} alt="" />
                                        </a>}
                                    </div>
                                </p>
                                <div className="project-desc">{element.description}</div>
                            </div>
                        )
                    })}


                </div>

            </div>
        </>
    )
}