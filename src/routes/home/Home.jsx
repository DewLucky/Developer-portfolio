import React from "react";
import image from '../../assets/developer-logo.svg'
import profile from '../../../public/profile-picture.png'
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
                    <div className="home-intro-item-1">
                        <img src={profile} alt="" />
                    </div>
                    <div className="home-intro-item-2"> 
                        <p>I am a <span className="primary">Frontend Developer</span> skilled at developing user-friendly, visually appealing web applications.</p> 
                        <p>I aspire to become a <span className="primary">Full Stack Developer</span>.</p>
                        <p> Additionally, I possess strong problem-solving skills and an eagerness to learn new technologies that will enable me to develop innovative solutions quickly.</p>
                        <p>My technical skill set inludes <span className="primary">React, C++, Javascript, Node.Js and Express</span>. I am learning more about backend development using <span className="primary">Node.Js</span>, <span className="primary">Express</span> and <span className="primary">MongoDB</span>.</p>
                       
                    </div>
                </div>
            </div>
            <div className="social-handles">
                <h3>Connect with Me on </h3>
                <div className="social-links">
                    <a href="https://twitter.com/lucky_dwgn05?t=pfAsJRywMQdAOpvGa6QVxw&s=09" target="_blank">
                        <img src={twitter} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/Lucky-Dewangan/" target="_blank">
                        <img src={linkedIn} alt="" />
                    </a>
                    <a href=" https://www.instagram.com/invites/contact/?i=s1iz1a0gyd7b&utm_content=i03ypbb" target="_blank">
                        <img src={instagram} alt="" />
                    </a>
                    <a href="https://github.com/DewLucky" target="_blank">
                        <img src={github} alt="" />
                    </a>
                </div>
            </div>
        </>
    )
}