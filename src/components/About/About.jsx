import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about" id="about">
      {/* Left Section */}
      <div className="about-left">
        <img
          src={about_img}
          alt="About section illustration"
          className="about-img"
        />
        <img
          src={play_icon}
          alt="Play video icon"
          className="play-icon"
          onClick={() => setPlayState(true)}
        />
      </div>

      {/* Right Section */}
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
          nihil aliquid, magnam dolorem veritatis laboriosam qui, cumque amet
          delectus reiciendis quo minus eaque adipisci quod sit! Debitis nostrum
          non vero esse explicabo a aspernatur, sint autem beatae porro? Nulla
          voluptatibus explicabo eum dolorum facere, aliquam rerum est aut
          voluptatem natus vitae, repudiandae maxime consectetur.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis,
          nihil dolores optio ipsum culpa, ad a nisi quos alias recusandae ea
          ullam accusantium distinctio est iure nulla voluptatum dicta
          doloremque quaerat, voluptate maiores harum soluta! Ipsa facilis quia
          consequatur impedit maxime neque ad aliquid porro!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          asperiores optio earum repellendus corrupti totam beatae consequuntur
          nobis, dignissimos rerum laboriosam assumenda, doloribus omnis cumque
          doloremque. Quia, sequi accusantium totam consequuntur eveniet itaque
          dolor, error, cupiditate voluptatem nesciunt id voluptatibus sit cum.
          Inventore corporis, ratione quis saepe incidunt quidem porro earum sed
          alias.
        </p>
      </div>
    </div>
  );
};

export default About;
