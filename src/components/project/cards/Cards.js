import React from "react";

import "./Cards.scss";

function Cards({ title, img, desc, btntxt, websrc, href }) {
  return (
    <div className="cards">
      <img src={img} alt="project" className="image" />
      <div className="info">
        <h3>{title}</h3>
        <p>{desc}</p>
        <a
          href={websrc}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          {btntxt}
        </a>
      </div>
    </div>
  );
}

export default Cards;
