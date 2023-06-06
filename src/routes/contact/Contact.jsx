import React from "react";
import "./contact.css";
import twitter from "/assets/socialIcon/twitter.svg";
import instagram from "/assets/socialIcon/instagram.svg";
import github from "/assets/socialIcon/github.svg";
import linkedIn from "/assets/socialIcon/linkedIn.svg";
export default function Contact() {
  return (
    <>
      <div className="contact-container">
        <div className="contact-details-container">
          <h2>Get In Touch</h2>
          <p>
            I am active on LinkedIn and Twitter. Also feel free to send a hello
            or mail me at{" "}
            <span className="mail">luckydewangan791@gmail.com</span>
          </p>
          <button>
            <a href="mailto:luckydewangan791@gmail.com">Say Hi</a>
          </button>
          <div className="contact-social-handles">
            <div className="social-links">
              <a
                href="https://twitter.com/lucky_dwgn05?t=pfAsJRywMQdAOpvGa6QVxw&s=09"
                target="_blank"
              >
                <img src={twitter} alt="" />
              </a>
              <a
                href="https://www.linkedin.com/in/Lucky-Dewangan/"
                target="_blank"
              >
                <img src={linkedIn} alt="" />
              </a>
              <a
                href=" https://www.instagram.com/invites/contact/?i=s1iz1a0gyd7b&utm_content=i03ypbb"
                target="_blank"
              >
                <img src={instagram} alt="" />
              </a>
              <a href="https://github.com/DewLucky" target="_blank">
                <img src={github} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
