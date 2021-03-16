import React from "react";
import FlipCard from "./flip-cards/FlipCard";

import "./Skill.scss";

function Skill() {
  return (
    <div className="skill" id="skills">
      <h1>Skills</h1>
      <div className="title__bar"></div>
      <div className="sections">
        <h6>Front End</h6>
        <div className="front__end">
          <FlipCard img="/images/skill/front/html.PNG" tag="HTML"></FlipCard>
          <FlipCard
            img="/images/skill/front/sass.PNG"
            tag="CSS & SASS"
          ></FlipCard>
          <FlipCard
            img="/images/skill/front/js.PNG"
            tag="JAVASCRIPT"
          ></FlipCard>
          <FlipCard
            img="/images/skill/front/bootstrap.PNG"
            tag="BOOTSTRAP"
          ></FlipCard>
          <FlipCard
            img="/images/skill/front/react.PNG"
            tag="REACT & NATIVE"
          ></FlipCard>
        </div>
        <h6>Other</h6>
        <div className="other">
          <FlipCard
            img="/images/skill/other/adobe.PNG"
            tag="ADOBE XD"
          ></FlipCard>
          <FlipCard img="/images/skill/other/git.jpg" tag="GitHub"></FlipCard>
          <FlipCard
            img="/images/skill/front/firebase.PNG"
            tag="FIREBASE"
          ></FlipCard>
        </div>
      </div>
    </div>
  );
}

export default Skill;
