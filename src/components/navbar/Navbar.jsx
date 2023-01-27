import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'
export default function Navbar() {
  return (
    <>
      <header>
        <nav className="navbar">
          <Link id="home" to="/" className="navbar-title-logo">
            <span className="brand-logo">Lucky</span>
          </Link>
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
