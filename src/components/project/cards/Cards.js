import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";

import "./Cards.scss";

function Cards({ title, img, desc, btntxt, websrc, href }) {
  return (
    <div className="cards">
      <img src={img} alt="project" className="image" />
      <div className="info">
        <h3>{title}</h3>
        <p>{desc}</p>
        <div className="btn__group">
          <a
            href={websrc}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            {btntxt}
          </a>

          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="git__btn"
          >
            <GitHubIcon></GitHubIcon>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cards;
