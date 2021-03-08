import React from "react";

import "./FlipCard.scss";

function FlipCard({ img, tag }) {
  return (
    <div className="flip__card">
      <div className="inner">
        <div className="front">
          <img src={img} alt="skill" />
        </div>

        <div className="back">
          <h5>{tag}</h5>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
