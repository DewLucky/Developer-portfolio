import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'
import menu from '/assets/hamburger.svg'
import cancel from '/assets/cancel-logo.svg'
// import { useState } from "react";

export default function Navbar() {
  // const handleBurgerClick = ()=>{
  //   if(window.screen.width<=630){
  //     const burger = document.querySelector('.menu-logo');
  //     burger.style.display = "none";
  //     const cancel = document.querySelector('.cancel-logo');
  //     cancel.style.display = 'block';
  //     const verticalNav = document.getElementsByClassName('navigation');
  //     verticalNav[0].style.transform = `translateX(${0}rem)`;
  //   }
  // }

  const toggleNavbar = (event)=>{
    const element = event.target;
    const id = element.id;
    const navbar = document.getElementById("navigation");

    if (id === "cancel-logo") {
      element.style.display = "none"
      navbar.style.transform = "translateX(300px)";
      document.getElementById("hamburger").style.display = "block";
      document.getElementById("blur-background").style.display = "none"
    } 

    if(id == "hamburger"){
      element.style.display = "none"
      navbar.style.transform = "translateX(0)"
      document.getElementById("cancel-logo").style.display = "block"
      document.getElementById("blur-background").style.display = "block"
    }
  }

  return (
    <>
      <header>
        <nav className="navbar">
            <div className="navbar-logo-container">
              {/* <div className="menu-logo"><img src={menu} onClick={handleBurgerClick} alt="" /></div>
              <div className="cancel-logo"><img src={cancel} onClick={handleCancelClick} alt="" /></div> */}
              <img id="hamburger" src={menu} onClick={toggleNavbar} alt="hamburger" />
              <img id="cancel-logo" src={cancel} alt="cancel" onClick={toggleNavbar}/>
              <Link id="home" to="/" className="navbar-title-logo">
                <span className="brand-logo heading-color-2">Lucky</span>
              </Link>
            </div>

          <ul id="navigation">
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
