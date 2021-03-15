import React from "react";
import Cards from "./cards/Cards";

import "./Project.scss";

// Project page, which showcases a gallery of project images

function Project() {
  return (
    <div className="project" id="projects">
      <h2>Projects</h2>
      <div className="project__cards">
        <Cards
          title="V+R"
          img="images/project/vr.PNG"
          desc="Product showcase website created using React, HTML & SCSS"
          btntxt="Visit"
          websrc="https://v-r.netlify.app/"
          href="https://github.com/IronHarambe/v-r"
        ></Cards>

        <Cards
          title="JToggle"
          img="images/project/jtoggle.PNG"
          desc="React Website that allows you toggle between Hiragana and Katakana Charts!"
          btntxt="Visit"
          websrc="https://hiragana-katakana-toggle.netlify.app/"
          href="https://github.com/IronHarambe/jcompare"
        ></Cards>

        <Cards
          title="JTravel"
          img="images/project/jtravel.PNG"
          desc="Showcase brochure website for visiting Japan!"
          btntxt="Visit"
          websrc="https://ironharambe.github.io/JTravel/"
          href="https://github.com/IronHarambe/JTravel"
        ></Cards>

        <Cards
          title="Art Nation"
          img="images/project/home2.PNG"
          desc="Eccomerse art website created using React."
          btntxt="Visit"
          websrc="https://github.com/IronHarambe/MFashion"
          href="https://github.com/IronHarambe/MFashion"
        ></Cards>
      </div>
    </div>
  );
}

export default Project;
