import React from "react";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";

import "./IconStack.scss";

function IconStack() {
  return (
    <div className="stack">
      <a
        href="https://github.com/IronHarambe"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon></GitHubIcon>
      </a>

      <a
        href="https://www.linkedin.com/in/samson-jose-5566781b2/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon></LinkedInIcon>
      </a>

      {/* Link for doc example:  href="/SamsonJose_Resume.pdf" */}

      <a href="" target="_blank" rel="noopener noreferrer">
        <PictureAsPdfIcon></PictureAsPdfIcon>
      </a>
    </div>
  );
}

export default IconStack;
