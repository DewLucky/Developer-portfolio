import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'
import menu from '/hamburger-button.svg'
import cancel from '/cancel-logo.svg'
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

  // const handleCancelClick = ()=>{
  //   if(window.screen.width<=630){
  //     const burger = document.querySelector('.menu-logo');
  //     burger.style.display = "block";
  //     const cancel = document.querySelector('.cancel-logo');
  //     cancel.style.display = 'none';
  //     const verticalNav = document.getElementsByClassName('navigation');
  //     verticalNav[0].style.transform = `translateX(${10}rem)`;
  //   }
  // }

  return (
    <>
      <header>
        <nav className="navbar">
            <div className="navbar-logo-container">
              {/* <div className="menu-logo"><img src={menu} onClick={handleBurgerClick} alt="" /></div>
              <div className="cancel-logo"><img src={cancel} onClick={handleCancelClick} alt="" /></div> */}
              <Link id="home" to="/" className="navbar-title-logo">
                <span className="brand-logo">Lucky</span>
              </Link>
            </div>

          <ul className="navigation">
              {/* <div class="nav-close-btn"></div> */}
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
