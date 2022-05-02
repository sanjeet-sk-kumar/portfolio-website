import React, { useEffect, useRef, useState } from "react";
import { FaSoundcloud, FaBars, FaTimes } from "react-icons/fa";
import "./Header.scss";
import mp3 from "../../assets/music/Night.mp3";
const Header = () => {
  const [soundTrack, setSoundTrack] = useState("off");
  const [isMenuOpen, setIsMenuOpen] = useState("close");
  const barsOpen = useRef();
  const timesClose = useRef();
  const myAudio = useRef();
  const soundTrackChangeHandler = (value) => {
    setSoundTrack(value);
    if (value === "on") myAudio.current.play();
    else myAudio.current.pause();
  };
  useEffect(() => {
    const openBtn = document.querySelector("#openBtn");
    const closeBtn = document.querySelector("#closeBtn");
    const sideBar = document.querySelector(".aside");
    if (isMenuOpen === "open") {
      sideBar.classList.add("show-nav");
      openBtn.style.display = "none";
      closeBtn.style.display = "block";
    } else if (isMenuOpen === "close") {
      sideBar.classList.remove("show-nav");
      openBtn.style.display = "block";
      closeBtn.style.display = "none";
    }
  }, [isMenuOpen]);
  return (
    <>
      <header>
        <div id="sound">
          <audio ref={myAudio} id="my-audio">
            <source src={mp3} type="audio/mpeg" />
          </audio>
          <FaSoundcloud className={`sound-cloud sound-cloud-${soundTrack}`} />
          <span>Sound</span>
          <div className="on-off">
            {soundTrack === "on" && (
              <span id="on" onClick={() => soundTrackChangeHandler("off")}>
                {soundTrack}
              </span>
            )}

            {soundTrack === "off" && (
              <span id="off" onClick={() => soundTrackChangeHandler("on")}>
                {soundTrack}
              </span>
            )}
          </div>
        </div>
        <div className="btns-container">
          <FaBars
            id="openBtn"
            ref={barsOpen}
            className="fas bars"
            onClick={() => setIsMenuOpen("open")}
          />
          <FaTimes
            id="closeBtn"
            className="fas times"
            onClick={() => setIsMenuOpen("close")}
          />
          {/* <Logo /> */}
        </div>
      </header>
    </>
  );
};

export default Header;
