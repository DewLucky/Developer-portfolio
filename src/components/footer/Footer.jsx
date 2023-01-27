import React from "react";
import twitter from '../../assets/twitter.svg'
import linkedIn from '../../assets/linkedIn.svg'
import instagram from '../../assets/instagram.svg'
import github from '../../assets/github.svg'
import './footer.css'
export default function Footer(){
    return(
        <footer>
            <div className="footer-container">
                <p>&copy; copyright 2023 Lucky Dewangan</p>
              
                    <div className="footer-social-links">
                        <img src={twitter} alt="" />
                        <img src={linkedIn} alt="" />
                        <img src={instagram} alt="" />
                        <img src={github} alt="" />
                    </div>
            </div>
        </footer>
    )
}