import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaUser, FaGithub, FaLinkedin, FaQuora } from "react-icons/fa";
import "./Sidebar.scss";
import logoS from "../../assets/images/s.png";
// import logoS from "../../assets/images/logo.png";
import Logo from "../../assets/Logo/Logo";

const Sidebar = () => {
  return (
    <aside className="aside">
      <div className="aside-wrapper">
        <div className="logo-section">
          <Link className="logo" to="/">
            <img src={logoS} alt="logo" />
            {/* <Logo /> */}
            <span>Sanjeet</span>
          </Link>
          <span>Web Developer</span>
        </div>
        <nav className="nav-links">
          <NavLink exact to="/" activeclassname="active">
            About
          </NavLink>
          <NavLink
            exact
            to="/myskills"
            className="about-link"
            activeclassname="active"
          >
            My Skills
          </NavLink>
          <NavLink
            exact
            to="/work"
            className="about-link"
            activeclassname="active"
          >
            Work
          </NavLink>
          <NavLink
            exact
            to="/blog"
            className="about-link"
            activeclassname="active"
          >
            Blog
          </NavLink>
          <NavLink
            exact
            to="/contact"
            className="about-link"
            activeclassname="active"
          >
            Contact
          </NavLink>
        </nav>
        <ul className="social-icons">
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/sanjeet-kumar-5a33b77b/"
            >
              <FaLinkedin></FaLinkedin>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/sanjeet-sk-kumar"
            >
              <FaGithub></FaGithub>
            </a>
          </li>

          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.quora.com/profile/Sanjeet-Kumar-452"
            >
              <FaQuora></FaQuora>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
