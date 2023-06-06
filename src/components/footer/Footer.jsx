import React from "react";
import twitter from '/assets/socialIcon/twitter.svg'
import linkedIn from '/assets/socialIcon/linkedIn.svg'
import instagram from '/assets/socialIcon/instagram.svg'
import github from '/assets/socialIcon/github.svg'
import './footer.css'
export default function Footer(){
    return(
        <footer>
            <div className="footer-container">
                <p>&copy; copyright 2023 Lucky Dewangan</p>
              
                    <div className="footer-social-links">
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
        </footer>
    )
}