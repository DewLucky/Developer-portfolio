import React from "react";
import image from '../../assets/developer-logo.svg'
import twitter from '../../assets/twitter.svg'
import linkedIn from '../../assets/linkedIn.svg'
import instagram from '../../assets/instagram.svg'
import github from '../../assets/github.svg'
import './home.css'
export default function Home() {
    return(
        <>
           <div className="home-container">
            <div className="home-item-1">
                <h2>Hi, I'm <span className="primary">Lucky</span></h2>
                <p>A Frontend Developer</p>
            </div>
            <div className="home-item-2">
                <img src={image} alt="" />
            </div>
           </div>
            
            <div className="home-intro-container">
                <h3 className="home-intro-heading">Let Me <span className="primary">Introduce</span> Myself</h3>
                <div className="home-intro-items-container">
                    {/* <div className="home-intro-item-1">
                        <img src={image} alt="" />
                    </div> */}
                    <div className="home-intro-item-2"> 
                        <p>I am a <span className="primary">Frontend Developer</span> skilled at developing user-friendly, visually appealing web applications. My technical skill set inludes <span className="primary">React, C++, Javascript, Node.Js and Express</span>. I am learning more about backend development using <span className="primary">Node.Js</span>, <span className="primary">Express</span> and <span className="primary">MongoDB</span>.</p>
                       
                    </div>
                </div>
            </div>
            <div className="social-handles">
                <h3>Connect with Me on </h3>
                <div className="social-links">
                    <img src={twitter} alt="" />
                    <img src={linkedIn} alt="" />
                    <img src={instagram} alt="" />
                    <img src={github} alt="" />
                </div>
            </div>
        </>
    )
}