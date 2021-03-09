import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";

import "./Footer.scss";
import IconStack from "../icon-stack/IconStack";

function Footer() {
  return (
    <div className="footer">
      <IconStack></IconStack>
      <h5>Samson Jose @ 2021</h5>
    </div>
  );
}

export default Footer;
