import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import './navbar.css'
import menu from '/assets/hamburger.svg'
import cancel from '/assets/cancel-logo.svg'
import { useState } from "react";

export default function Navbar() {
  const [screenWidth, setScreenWidth] = useState(window.outerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleResize = () => {
    setScreenWidth(window.outerWidth);
  };

  const disableScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const enableScroll = () => {
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleNavbar = (event)=>{
    const element = event.target;
    const id = element.id;
    const navbar = document.getElementById("navigation");

    if (id === "cancel-logo") {
      if(screenWidth>576){
        element.style.display = "none"
        return;
      }
      element.style.display = "none"
      navbar.style.transform = "translateX(300px)";
      document.getElementById("hamburger").style.display = "block";
      document.getElementById("blur-background").style.display = "none"
      document.getElementById("navigation").style.display = "none"
    } 

    setIsMenuOpen(!isMenuOpen);

    if(id == "hamburger"){
      element.style.display = "none"
      navbar.style.transform = "translateX(0)"
      document.getElementById("cancel-logo").style.display = "block"
      document.getElementById("blur-background").style.display = "block"
      document.getElementById("navigation").style.display = "flex"
    }
  }

  if (isMenuOpen) {
    disableScroll();
  } else {
    enableScroll();
  }

  return (
    <>
      <header>
        <nav className="navbar">
            <div className="navbar-logo-container">
              <img id="hamburger" className={`hamburger ${screenWidth>576 ? `none`: `block`}`} src={menu} onClick={toggleNavbar} alt="hamburger" />
              <img id="cancel-logo" className={`cancel-logo ${screenWidth>576 && `none`}`} src={cancel} alt="cancel" onClick={toggleNavbar}/>
              <Link id="home" to="/" className="navbar-title-logo">
                <span className="brand-logo heading-color-2">Lucky</span>
              </Link>
            </div>

          <ul id="navigation" className="navigation">
              <li className="navbar-nav-items">
                <Link to="/">Home</Link>
              </li> 

              <li className="navbar-nav-items">
                <Link to="about">About</Link>
              </li>

              <li className="navbar-nav-items">
                <Link to="projects">Projects</Link>
              </li>

              <li className="navbar-nav-items">
                <Link to="contact">Contact</Link>
              </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
