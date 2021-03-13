import React from "react";
import FlipCard from "./flip-cards/FlipCard";

import "./Skill.scss";

function Skill() {
  return (
    <div className="skill">
      <h1>Skills</h1>

      <div className="sections" id="skills">
        <div className="front__end">
          <p>Front End</p>
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
          <FlipCard
            img="/images/skill/front/firebase.PNG"
            tag="FIREBASE"
          ></FlipCard>
        </div>

        <div className="other">
          <p>Other</p>
          <FlipCard
            img="/images/skill/other/adobe.PNG"
            tag="ADOBE XD"
          ></FlipCard>
          <FlipCard img="/images/skill/other/git.jpg" tag="GitHub"></FlipCard>
        </div>
      </div>
    </div>
  );
}

export default Skill;
