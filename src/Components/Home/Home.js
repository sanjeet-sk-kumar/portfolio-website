import React from "react";
import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";
import "./Home.scss";
import logoS from "../../assets/images/s.png";

const Home = () => {
  return (
    <section id="section-home" className="section-home">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm <img src={logoS} alt="Sanjeet" />
          anjeet, <br /> Web Developer
        </h1>
        <p className="gray-text">Front End Developer / Javascript</p>
        <br />
        <Link to="/contact" className="contact-button">
          <div>
            <span className="bg"></span>
            <span className="base"></span>
            <span className="text">Contact Me</span>
          </div>
        </Link>
      </div>
      <div className="scroll-down scroll-down-left">
        <span>scroll down</span>
        <FaArrowDown className="fas" />
      </div>
      <div className="scroll-down">
        <span>scroll down</span>
        <FaArrowDown className="fas" />
      </div>
    </section>
  );
};

export default Home;
