import React from "react";

import "./Landing.scss";

/* Lannding page containes full page image and highlight text.
 */

function Landing() {
  return (
    <div className="landing" id="home">
      <div className="landing__text">
        <h1>
          Hi<span className="comma">,</span> I'm
          <span className="name"> Samson Jose</span>
        </h1>
        <h6>I'm a junior web & software dev.</h6>
        <div className="project__btn"></div>
      </div>
    </div>
  );
}

export default Landing;
