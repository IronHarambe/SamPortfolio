import React from "react";
import IconStack from "../icon-stack/IconStack";

import "./About.scss";

/* About Page, consisting of profile, social media links and bibliography */

function About() {
  return (
    <div className="about" id="about">
      <h2>About</h2>
      <div className="title__bar"></div>
      <div className="wrapper">
        <div className="intro">
          <img src="/images/me.jpg" alt="about__img" className="about__img" />
          <h3>Samson Jose</h3>
          <p>B.I.C.T Graduate</p>
          <IconStack></IconStack>
        </div>

        <div className="biography">
          <h5>About Me?</h5>
          <p>
            I am a graduate in the Bachelor of Information and Communication
            Technology, majoring in Software Developmet. I am particularly
            intrested in Web, Mobile and VR development.
          </p>

          <p>
            I have experience in working with various university, internship and
            personal projects. I am an excellent team member and passionate
            about creating innovative solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
