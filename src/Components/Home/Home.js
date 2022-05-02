import React from "react";
import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";
import Button from "../Common/Button/Button";
import "./Home.scss";
import MagicWallItem from "../Common/MagicWallItem/MagicWallItem";
import logoS from "../../assets/images/s.png";
import Bez3 from "../../assets/images/Bez-nazwy-3.jpg";
import Bez2 from "../../assets/images/Bez-nazwy-2.png";
import three from "../../assets/images/3.jpg";
import motorSport from "../../assets/images/Adrian-Flux-Motorsport-1.jpg";
import londonBlock from "../../assets/images/london-block.jpg";
import pobrane from "../../assets/images/pobrane-1.jpg";
import pobrane3 from "../../assets/images/pobrane.jpg";
import themeContent from "../../assets/images/https-club-silversurfers-com-wp-content-themes-club-2B-img-logo-svg.png";

const Home = () => {
  return (
    <>
      <section id="section-home" className="section-home">
        <div className="text-zone">
          <h1>
            Hi, <br /> I'm <img src={logoS} alt="Sanjeet" />
            anjeet, <br /> Web Developer
          </h1>
          <p className="gray-text">Front End Developer / Javascript</p>
          <br />
          <Button to="/contact" text="Contact Me" />
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
      <section id="section-work">
        <div id="header">
          <h2>My Portfolio</h2>
        </div>
        <div className="text-zone-2">
          <div>
            <p>
              A small gallery of recent projects chosen by me. I've done them
              all together with amazing people from companies around the globe.
              It's only a drop in the ocean compared to the entire list.
              <br />
              interested to see more? Visit <Link to="/portfolio">
                my work
              </Link>{" "}
              page.
            </p>
          </div>
          <Button to="/portfolio" text="See more!"></Button>
        </div>
        <div className="fake-big-2">work</div>
      </section>

      <div id="home-magicwall" className="fake-magicwall">
        <ul>
          <li>
            <MagicWallItem src={pobrane3} alt="images" />
          </li>
          <li>
            <MagicWallItem src={Bez3} alt="images" />
          </li>
          <li>
            <MagicWallItem src={Bez2} alt="images1" />
          </li>
          <li>
            <MagicWallItem src={three} alt="images1" />
          </li>
          <li>
            <MagicWallItem src={motorSport} alt="images1" />
          </li>
          <li>
            <MagicWallItem src={themeContent} alt="images1" />
          </li>
          <li>
            <MagicWallItem src={londonBlock} alt="images1" />
          </li>
          <li>
            <MagicWallItem src={pobrane} alt="images1" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
