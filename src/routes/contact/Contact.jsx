import React from 'react'
import './contact.css'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'
import github from '../../assets/github.svg'
import linkedIn from '../../assets/linkedIn.svg'
export default function Contact(){
    return (
        <>
            <div className="contact-container">
                <div className="contact-details-container">
                    <h2>Get In Touch</h2>
                    <p>I am active on LinkedIn and Twitter. Also feel free to send a hello or mail me at <span className='mail'>luckydewangan791@gmail.com</span></p>
                    <button><a href='mailto:luckydewangan791@gmail.com'>Say Hi</a></button>
                    <div className="contact-social-handles">
                        <div className="social-links">
                        <img src={twitter} alt="" />
                        <img src={linkedIn} alt="" />
                        <img src={instagram} alt="" />
                        <img src={github} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}